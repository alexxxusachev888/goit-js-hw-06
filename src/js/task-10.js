function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputElem: Number(document.querySelector('input[type="number"]').value),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxesElement: document.querySelector('#boxes'),
}

function createBoxes(amount) {
  const arrayOfElements = [];
  const basicSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxElem = document.createElement('div');

    boxElem.style.width = (basicSize + i * 10) + 'px';
    boxElem.style.height = (basicSize + i * 10) + 'px';
    boxElem.style.backgroundColor = getRandomHexColor();

    arrayOfElements.push(boxElem);
  }

  refs.boxesElement.append(...arrayOfElements);
}

refs.createButton.addEventListener('click', createBoxes(refs.inputElem));

refs.destroyButton.addEventListener('click', () => {
  refs.boxesElement.innerHTML = '';
});