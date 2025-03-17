class InputRadio {
    constructor(cid) {
        this.container = document.querySelector(cid);
        this.curRadio = false;

        this.render();
        this.attachEventListeners();
    }

    render() {
        this.container.innerHTML = `
            <span>Выберите radio</span>
            <div class="radio__wrapper">
                <div class="radio__block">
                    <input type="radio" id="radio1" name="language" value="JavaScript">
                    <label for="radio1">JavaScript</label>
                </div>
                <div class="radio__block">
                    <input type="radio" id="radio2" name="language" value="PHP">
                    <label for="radio2">PHP</label>
                </div>
                <div class="radio__block">
                    <input type="radio" id="radio3" name="language" value="C#">
                    <label for="radio3">C#</label>
                </div>
            </div>
        `;

        this.radios = this.container.querySelector('.radio__wrapper');
    }

    attachEventListeners() {
        this.radios.addEventListener('click', (event) => {
            if (event.target.type === 'radio') {
                let curentRadio = this.container.querySelector(`#${event.target.id}`);
                
                this.updateRadio(curentRadio);
                this.validate(curentRadio.value);
            }
        });
    }

    validate(data) {
        if (data && typeof data === 'string') {
            this.radios.classList.remove(this.radios.classList[0] + '_error');
            return true;
        }
        
        if (!this.radios.className.includes('_error')){
            this.errorHandler();
        }
        return false;
    }

    errorHandler() {
        this.radios.classList.add(this.radios.className + '_error');
    }

    updateRadio(elem) {
        if (this.curRadio) {
            this.curRadio.toggleAttribute('checked');
        }

        elem.toggleAttribute('checked');

        this.curRadio = elem;

    }

}

export default InputRadio;