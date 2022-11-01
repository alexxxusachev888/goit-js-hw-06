const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');


inputElem.addEventListener('input', () => {
  if (inputElem.value === '') {
    outputElem.textContent = 'Anonymous';
  }
  outputElem.textContent = inputElem.value;
});

/* не можу зрозуміти, чому при пустому імпуті не зявляється Anonymous. Здається перевірка через If правильна*/