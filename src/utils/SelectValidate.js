export default function isValidSelectInput(data, root_class){
    if (data && typeof data === 'string') {
        document.querySelector('.'+root_class).classList.remove(`${root_class}`+'_error');
        return true;
    }

    SelectErrorHandler(root_class);
    return false;
}

function SelectErrorHandler(root_class) {
    document.querySelector('.'+root_class).classList.add(`${root_class}`+'_error');
}