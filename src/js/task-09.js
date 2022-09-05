const refs = {
  button: document.querySelector('button.change-color'),
  colorName: document.querySelector('span.color'),
}

refs.button.addEventListener('click', onClickEvent);

function onClickEvent() {
  refs.colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = refs.colorName.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


