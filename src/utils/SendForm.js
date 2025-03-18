function FormHandler(components) {
    const form = document.querySelector('[name="form-1"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getDataForm(event.target, components);

        if (data) {
            openPopup(components.popup, data);
        } else {
            console.log('Ошибка')
        }

    });
}

function openPopup(component, data) {
    const infoBlock = component.popup.querySelector('.popup__info');

    data.forEach((val, key) => {
        infoBlock.innerHTML += `
            <p>${key} : ${val}</p>
        `
    });

    component.show();
}

function getDataForm(form, components) {
    let formData = new FormData();
    let hasError = false

    const minRange = form.querySelector('input[name="minValue"]')?.value ?? null;
    const maxRange = form.querySelector('input[name="maxValue"]')?.value ?? null;

    if (minRange && maxRange) {
        formData.append('minRange', minRange);
        formData.append('maxRange', maxRange);
    } else {
        hasError = true;
    }

    const selectInstrument = form.querySelector('.__select input[checked]')?.value ?? null;
    if (components.select.validate(selectInstrument)) {
        formData.append('selectIntrument', selectInstrument)
    } else {
        hasError = true;
    }

    const selectLanguage = form.querySelector('.radio__wrapper input[checked]')?.value ?? null;
    if (components.radio.validate(selectLanguage)) {
        formData.append('selectLanguage', selectLanguage)
    } else {
        hasError = true;
    }

    
    const textInputs = form.querySelectorAll('.input-text__wrapper input') ?? null;

    if (textInputs) {
        Array.from(textInputs).forEach((elem) => {
            let isCorrect = false;

            if (elem.name === 'user-name') {
                isCorrect = components.inputFullName.validate(elem.value, elem.name)
            } else if (elem.name === 'user-age') {
                isCorrect = components.inputAge.validate(elem.value, elem.name)
            }

            if (isCorrect) {
                formData.append(elem.name, elem.value);
            } else {
                hasError = true;
            }
        });
    }

    const checkboxInputs = form.querySelectorAll('.input-checkbox__wrapper input') ?? null;

    if (checkboxInputs) {
        Array.from(checkboxInputs).forEach((elem) => {
            formData.append(elem.name, elem.checked ? elem.value : null);
        });
    }

    if (!hasError) {
        return formData;
    } else {
        return null;
    }
}

export default FormHandler;