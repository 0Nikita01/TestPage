

class Popup {
    constructor({root, cid}) {

        this.root = document.querySelector(root);
        this.popup = document.createElement("div");
        this.popup.classList.add(cid);

        this.isOpen = false

        this.render();
        this.attachEventListeners();
    }

    render() {
        this.popup.innerHTML += `
            <div class="popup__container">
                <div class="popup__content">
                    <div class="popup__close-wrapper">
                        <div class="popup__close-button"></div>
                    </div>
                    <div class="popup__header">Результат отправки:</div>
                    <div class="popup__info"></div>
                </div>
            </div>
        `;
        this.root.append(this.popup);
        this.content = this.popup.querySelector('.popup__info');

        this.hide();
    }

    show() {
        this.isOpen = true;
        this.popup.classList.remove('popup_hide');
    }

    hide() {
        this.isOpen = false;
        this.popup.classList.add('popup_hide');
        this.clean();
    }

    clean() {
        this.content.innerHTML = "";
    }

    attachEventListeners() {
        this.popup.addEventListener('click', (event) => {
            if (event.target.className === "popup__close-button" || event.target.className === "popup__container") {
                this.hide();
            }
        });
    }
}

export default Popup;