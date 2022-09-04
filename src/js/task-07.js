const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.input.addEventListener('input', onInputRunnerMovementEvent);

function onInputRunnerMovementEvent(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
