const https = require('https');

const { toPascalCase } = require('./src/utils/naming');

const apiURL = 'https://api.github.com/repos/VKCOM/icons';

const options = {
  headers: {
    'User-Agent': 'sveltevk/icons'
  }
};

// const sha = `git rev-list --tags --max-count=1`
// const nowVersion = `git describe --tags ${sha} --always`

// Получаем тэги
const getTags = () => {
  https.get(`${apiURL}/tags`, options, (res) => {
    let body = '';

    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      const data = JSON.parse(body);

      const newVersion = data[0].name
      const prevVersion = data[1].name
      getCompare(prevVersion, newVersion)

      console.log(`${prevVersion}...${newVersion}`)
      console.log(`https://github.com/sveltevk/icons/releases/new?tag=${newVersion}&title=${newVersion}\n`)
    });
  }).on("error", (err) => {
    console.debug(err)
    console.error('git compare status: ' + err.message);
    process.exit(1);
  })
}

const getCompare = (prevVersion, newVersion) => {
  https.get(`${apiURL}/compare/${prevVersion}...${newVersion}`, options, (res) => {
    let body = '';

    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      const data = JSON.parse(body);
      changelog(data)
    });
  }).on("error", (err) => {
    console.debug(err)
    console.error('git compare status: ' + err.message);
    process.exit(1);
  })
}



const changelog = (data) => {
  const add = []
  const update = []
  data.files.forEach(file => {
    const found = file.filename.match(/src\/svg\/(\d+)\/([a-z_]+)_\d+.svg/)
    if (!found) return

    const size = found[1]
    const id = found[2]

    const absolutePath = `${size}/${id}`
    const svelteName = toPascalCase(id)
    const className = `Icon${size}${svelteName}`

    const text = [
      `[![${absolutePath}](${file['raw_url']})](https://sveltevk.github.io/icons/#${absolutePath})`,
      '',
      '```js',
      `import ${className} from '@sveltevk/icons/dist/${absolutePath}';`,
      '```',
    ].join('\n')

    switch (file.status) {
      case 'added':
        add.push(text)
        break;
      case 'modified':
        update.push(text)
        break;
    }
  });

  if (add.length > 0)  {
    console.info('## Add\n')
    console.info(add.join('\n\n'))
  }

  if (update.length > 0)  {
    console.info('\n## Update\n')
    console.info(update.join('\n\n'))
  }
}

// TODO: `yarn add @vkontakte/icons@${newVersion} -D`
// TODO: `git add -A`
// TODO: `yarn version --new-version ${newVersion}`

getTags()