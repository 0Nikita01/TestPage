import './style.sass'

import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import headerImage from '/icons/image.png'

import InputMultiRange from './components/InputMultiRange/index.js';
import './components/InputMultiRange/style.sass';

import InputSelect from './components/InputSelect/index.js';
import './components/InputSelect/style.sass';

import InputRadio from './components/InputRadio/index.js';
import './components/InputRadio/style.sass';

import InputText from './components/InputText/index.js';
import './components/InputText/style.sass';

import InputCheckbox from './components/InputCheckbox/index.js';
import './components/InputCheckbox/style.sass';

import Button from './components/Button/index.js'
import './components/Button/style.sass';

import FormHandler from './utils/SendForm.js';

import Popup from './components/Popup/index.js';
import './components/Popup/style.sass';

window.addEventListener('DOMContentLoaded', () => {
	const root = '.main__form';
	const rootPopup = 'body'

	const popup = new Popup({root: rootPopup, cid: 'popup'});
	new InputMultiRange('.main__form-range');
	const select = new InputSelect('.main__form-select');
	const radio = new InputRadio('.main__form-radio');
	const inputFullName = new InputText({
		cid: '.main__form-fullname',
		name: 'user-name',
		type: 'text'
	});
	const inputAge = new InputText({
		cid: '.main__form-age',
		name: 'user-age',
		type: 'number'
	});
	new InputCheckbox({
		root,
		cid: 'main__form-checkbox',
		isRequired: true,
		name: "required"
	});
	new InputCheckbox({
		root,
		cid: 'main__form-checkbox',
		isRequired: false,
		name: "not required"
	});
	new Button({
		root,
		cid: 'main__form-button'
	});

	document.querySelector('span[name="footer__current-year"]').innerHTML = getCurrentYear();

	FormHandler({select, radio, inputFullName, inputAge, popup});

	document.addEventListener('keydown', function(event) {
		if (event.key === "Escape" && popup.isOpen) {
			popup.hide();
			console.log('close')
		}
	});

	resizeImage()

	addEventListener("resize", () => {
		resizeImage()
	});
});

function resizeImage() {
	const header__content = document.querySelector('.header__content');
	const header_image = document.querySelector('.header__image');
	const header__content_width = header__content.clientWidth;

	console.log('resize')
	if (window.outerWidth >= 648) {
		header_image.style.width = ((window.outerWidth - header__content_width)/2 + header__content_width * 0.3) + 'px';
	} else {
		header_image.style.width = '100%';
	}
}

const getCurrentYear = () => {
	return new Date().getFullYear();
}