const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');


inputElem.addEventListener('input', () => {
  if (inputElem.value === '') {
    outputElem.textContent = 'Anonymous';
  } else {
    outputElem.textContent = inputElem.value;
  }

});