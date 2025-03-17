import isValidSelectInput from "../../utils/SelectValidate";

class InputSelect {
    constructor(cid) {
        this.container = document.querySelector(cid);
        this.checked = false;

        this.render();
        this.attachEventListeners();
    }

    render() {
        this.container.innerHTML = `
            <span>Выберите select</span>
            <div class="__select" data-state="">
                <div class="__select__title" data-default="Option 0">Option</div>
                <div class="__select__content">
                    <input id="singleSelect0" class="__select__input" type="radio" value="" name="instruments"/>
                    <label for="singleSelect0" class="__select__label">Option</label>
                    <input id="singleSelect1" class="__select__input" type="radio" value="Vite" name="instruments" />
                    <label for="singleSelect1" class="__select__label">Vite</label>
                    <input id="singleSelect2" class="__select__input" type="radio" value="Webpack" name="instruments" />
                    <label for="singleSelect2" class="__select__label">Webpack</label>
                    <input id="singleSelect3" class="__select__input" type="radio" value="Gulp" name="instruments"/>
                    <label for="singleSelect3" class="__select__label">Gulp</label>
                </div>
            </div>
        `;

        this.selectSingle = this.container.querySelector('.__select');
        this.selectSingle_title = this.selectSingle.querySelector('.__select__title');
        this.selectSingle_labels = this.selectSingle.querySelectorAll('.__select__label');
        this.selectSingle_inputs = this.selectSingle.querySelectorAll('.__select__input');
    }

    attachEventListeners() {
        this.selectSingle_title.addEventListener('click', () => {
            if ('active' === this.selectSingle.getAttribute('data-state')) {
                this.selectSingle.setAttribute('data-state', '');
            } else {
                this.selectSingle.setAttribute('data-state', 'active');
            }
        });

        for (let i = 0; i < this.selectSingle_labels.length; i++) {
            this.selectSingle_labels[i].addEventListener('click', (event) => {
                this.selectSingle_title.textContent = event.target.textContent;
                this.selectSingle.setAttribute('data-state', '');
                console.log('change');
                this.updateRadio(this.selectSingle_inputs[i]);
                this.validate(this.checked.value);
            });
        }
    }

    validate(data) {
        if (data && typeof data === 'string') {
            this.selectSingle.classList.remove(this.selectSingle.classList[0] + '_error');
            return true;
        }
        
        if (!this.selectSingle.className.includes('_error')){
            this.errorHandler();
        }

        return false;
    }

    errorHandler() {
        this.selectSingle.classList.add(this.selectSingle.className + '_error');
    }

    updateRadio(elem) {
        if (this.checked) {
            this.checked.toggleAttribute('checked');
        }

        elem.toggleAttribute('checked');

        this.checked = elem;

    }

}

export default InputSelect;