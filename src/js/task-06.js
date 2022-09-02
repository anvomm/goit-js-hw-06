const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputValidation);

function onInputValidation(event) {

    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    
    } else {
        input.classList.add('invalid');
    }
        
};
