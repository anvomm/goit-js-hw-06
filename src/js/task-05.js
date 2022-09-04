const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputEnteredOutputNameChange);

function onInputEnteredOutputNameChange(event) {
    refs.nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        refs.nameOutput.textContent = 'Anonymous';
    }
};