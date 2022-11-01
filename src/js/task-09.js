function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyElem: document.querySelector('body'),
  buttonElem: document.querySelector('.change-color'),
  spanElem: document.querySelector('.color'),
}

refs.buttonElem.addEventListener('click', () => {
  const currColor = getRandomHexColor();

  refs.bodyElem.style.backgroundColor = currColor;

  refs.spanElem.textContent = currColor;

});