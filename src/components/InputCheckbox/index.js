class InputCheckbox {
    constructor({root, cid, isRequired, name}) {

        this.root = document.querySelector(root);
        this.newElem = document.createElement("div");
        this.newElem.classList.add(cid);

        this.isRequired = isRequired;
        this.name = name;

        this.render();
        this.attachEventListeners();
    }

    render() {

        this.newElem.innerHTML += `
            <div class="input-checkbox__wrapper">
                <input 
                    class="input-checkbox"
                    type="checkbox"
                    name="${this.name}"
                    value="${this.isRequired ? 'Обязательный' : 'Необязательный'}"
                    ${this.isRequired ? 'required' : ''} 
                />
                <span class="input-checkbox__label">${this.isRequired ? 'Обязательный' : 'Необязательный'} checkbox</label>
            </div>
        `;
        this.root.append(this.newElem);
    }

    attachEventListeners() {
        
    }

    

}

export default InputCheckbox;