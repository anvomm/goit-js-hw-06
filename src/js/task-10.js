const refs = {
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input'),
  boxesContainer: document.querySelector('#boxes'),
};

refs.input.addEventListener('input', onInputEvent);
refs.createButton.addEventListener('click', onCreateButtonClickEvent);
refs.destroyButton.addEventListener('click', onDestroyButtonClickEvent);

let enteredNumber = 0;

function onInputEvent(event) {
  enteredNumber = event.target.value;
  return enteredNumber;  
}

function onCreateButtonClickEvent() {
  createBoxes(enteredNumber);
};

function onDestroyButtonClickEvent() {
  destroyBoxes();
}

function createBoxes(amount) {
  const markup = '<div class = box></div>'.repeat(amount);
  refs.boxesContainer.insertAdjacentHTML('beforeend', markup); 
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((element, index) => {
    element.style.width = `${30 + 10 * index}px`;
    element.style.height = `${30 + 10 * index}px`;
    element.style.backgroundColor = getRandomHexColor();
  })

}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
  refs.input.value = '';
  enteredNumber = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
