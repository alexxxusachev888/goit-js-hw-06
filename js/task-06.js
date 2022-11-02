const inputElem = document.querySelector('#validation-input');

inputElem.addEventListener('blur', () => {
  if (inputElem.value.length == inputElem.dataset.length) {
    inputElem.classList.add('valid');
    inputElem.classList.remove('invalid');
  } else {
    inputElem.classList.remove('valid');
    inputElem.classList.add('invalid');
  }
});