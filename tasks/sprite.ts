import BrowserSymbol from 'svg-baker-runtime/browser-symbol.js';
import BrowserSprite from 'svg-baker-runtime/browser-sprite.js';

const canUseDOM = !!(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
);

let browserSprite: BrowserSprite | null;

if (canUseDOM) {
	const spriteId = '__SVG_SPRITE_NODE__';

	browserSprite = new BrowserSprite({ attrs: { id: spriteId } });

	const mount = () => {
		const spriteNode = document.getElementById(spriteId);
		if (spriteNode) {
			browserSprite.attach(spriteNode);
		} else {
			browserSprite.mount();
		}
	};

	if (document.querySelector('body')) {
		mount();
	} else {
		document.addEventListener('DOMContentLoaded', mount);
	}
} else {
	browserSprite = null;
}

export function addSpriteSymbol(symbol: any) {
	if (browserSprite) {
		browserSprite.add(new BrowserSymbol(symbol));
	}
}
