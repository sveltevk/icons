const https = require('https');
const { exit } = require('process');
const { execSync } = require('child_process');

const { toPascalCase } = require('./utils/naming');

const gh = (endpoint, fields) => {
	let flags = '';
	for (const key in fields) {
		if (fields.hasOwnProperty(key)) {
			const value = fields[key];
			flags += `-F='${key}=${value}' `;
		}
	}

	return execSync(`gh api ${endpoint} ${flags}`);
};

const apiURL = 'https://api.github.com/repos/VKCOM/icons';

const options = {
	headers: {
		'User-Agent': 'sveltevk/icons'
	}
};

const sha = execSync(`git rev-list --tags --max-count=1`).toString().trimEnd();
const nowVersion = execSync(`git describe --tags ${sha} --always`).toString().trimEnd();

// Получаем тэги
const getTags = () => {
	https
		.get(`${apiURL}/tags`, options, (res) => {
			let body = '';

			res.on('data', function (chunk) {
				body += chunk;
			});

			res.on('end', function () {
				const data = JSON.parse(body);

				let index = 0;
				for (let i = 0; i < data.length; i++) {
					const version = data[i].name;
					if (nowVersion === version) {
						index = i;
					}
				}

				if (index === 0) {
					console.error('latest version');
					exit(1);
				}

				const newVersion = data[index - 1].name;
				const prevVersion = data[index].name;

				execSync(`yarn add @vkontakte/icons@${newVersion} -D`);
				execSync(`git add -A`);
				execSync(`yarn version --new-version ${newVersion.substring(1)}`);
				// TODO: `git push --follow-tags`

				getCompare(prevVersion, newVersion);

				console.log(`${prevVersion}...${newVersion}`);
				console.log(
					`https://github.com/sveltevk/icons/releases/new?tag=${newVersion}&title=${newVersion}\n`
				);
			});
		})
		.on('error', (err) => {
			console.debug(err);
			console.error('git compare status: ' + err.message);
			process.exit(1);
		});
};

const getCompare = (prevVersion, newVersion) => {
	https
		.get(`${apiURL}/compare/${prevVersion}...${newVersion}`, options, (res) => {
			let body = '';

			res.on('data', function (chunk) {
				body += chunk;
			});

			res.on('end', function () {
				const data = JSON.parse(body);
				changelog(data, newVersion);
			});
		})
		.on('error', (err) => {
			console.debug(err);
			console.error('git compare status: ' + err.message);
			process.exit(1);
		});
};

const changelog = (data, newVersion) => {
	const add = [];
	const update = [];
	data.files.forEach((file) => {
		const found = file.filename.match(/src\/svg\/(\d+)\/([a-z_]+)_\d+.svg/);
		if (!found) return;

		const size = found[1];
		const id = found[2];

		const absolutePath = `${size}/${id}`;
		const svelteName = toPascalCase(id);
		const className = `Icon${size}${svelteName}`;

		const text = [
			`[![${absolutePath}](${file['raw_url']})](https://sveltevk.github.io/icons/#${absolutePath})`,
			'',
			'```js',
			`import ${className} from '@sveltevk/icons/${absolutePath}';`,
			'```'
		].join('\n');

		switch (file.status) {
			case 'added':
				add.push(text);
				break;
			case 'modified':
				update.push(text);
				break;
		}
	});

	let body = '';
	if (add.length > 0) {
		body += '## Add\n';
		body += add.join('\n\n');
	}

	if (update.length > 0) {
		body += '\n## Update\n';
		body += update.join('\n\n');
	}

	gh('repos/sveltevk/icons/releases', {
		tag_name: newVersion,
		name: newVersion,
		body: body,
		draft: true
	});
};

getTags();
