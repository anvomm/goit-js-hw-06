const refs = {
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input'),
  boxesContainer: document.querySelector('#boxes'),
};

refs.input.addEventListener('input', onInputEvent);
refs.createButton.addEventListener('click', onCreateButtonClickEvent);
refs.destroyButton.addEventListener('click', onDestroyButtonClickEvent);

let count = 0;

function onInputEvent(event) {
  count = event.target.value;
  return count;  
}

function onCreateButtonClickEvent() {
  createBoxes(count);
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
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.remove());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
