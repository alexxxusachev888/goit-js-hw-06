const inputElem = document.querySelector('#validation-input');

inputElem.addEventListener('blur', () => {
  if (inputElem.value.length == inputElem.dataset.length) {
    inputElem.classList.add('valid');
  } else {
    inputElem.classList.add('invalid');
  }
});