class InputText {
    constructor({cid, name, type}) {
        this.container = document.querySelector(cid);
        this.InputType = type;
        this.InputName = name;

        this.render();
        this.attachEventListeners();
    }

    render() {
        this.container.innerHTML = `
            <span>${getInputLabel(this.InputName)}</span>
            <div class="input-text__wrapper">
                <input 
                    class=input-text__input" 
                    type="${this.InputType}" 
                    name="${this.InputName}" 
                    placeholder="Placeholder"
                />
            </div>
        `;

        this.inputWrapper = this.container.querySelector('.input-text__wrapper');
        this.input = this.container.querySelector('input');
    }

    attachEventListeners() {
        this.input.addEventListener('blur', (event) => {
            this.validate(event.target.value, this.InputName);
        })
    }

    validate(data, name) {
        const fullNameRegex = /^[А-ЯЁ][а-яё]+(?:-[А-ЯЁ][а-яё]+)?\s[А-ЯЁ][а-яё]+(?:\s[А-ЯЁ][а-яё]+)?$/;
        const ageRegex = /^(?:[1-9][0-9]?|1[0-4][0-9]|150)$/;
        
        const isfullName = data && name === 'user-name' && fullNameRegex.test(data);
        const isAge = data && name === 'user-age' && ageRegex.test(data);

        if (isfullName || isAge) {
            this.inputWrapper.classList.remove(this.inputWrapper.classList[0] + '_error');
            return true;
        }
        
        if (!this.inputWrapper.className.includes('_error')){
            this.errorHandler();
        }
        return false;
    }

    errorHandler() {
        this.inputWrapper.classList.add(this.inputWrapper.className + '_error');
    }

}

const getInputLabel = (name) => {
    switch (name) {
        case 'user-name':
            return 'Введите ФИО';
        case 'user-age':
            return 'Введите возраст в цифрах';
    }

    return 'Введите текст';
}

export default InputText;