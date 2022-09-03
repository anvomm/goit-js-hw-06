function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('button.change-color'),
  body: document.querySelector('body'),
  colorName: document.querySelector('span.color'),
}

refs.button.addEventListener('click', onClickEvent);

function onClickEvent() {
  refs.colorName.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.colorName.textContent;
}

