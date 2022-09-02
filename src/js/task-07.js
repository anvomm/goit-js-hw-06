const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.input.addEventListener('input', onInputRunnerMovement);

function onInputRunnerMovement(event) {
    
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
