class Button {
    constructor({root, cid}) {

        this.root = document.querySelector(root);
        this.newElem = document.createElement("div");
        this.newElem.classList.add(cid);

        this.render();
        this.attachEventListeners();
    }

    render() {
        this.newElem.innerHTML += `
            <div class="input-button__wrapper">
                <button name="send-form" type="submit">Отправить</button>
            </div>
        `;
        this.root.append(this.newElem);
        this.button = this.root.querySelector('.input-button__wrapper');
    }

    attachEventListeners() {
        // this.button.addEventListener('click', (event) => {
        //     event.preventDefault();
        // });
    }
}

export default Button;