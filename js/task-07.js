const inputRangeElem = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');

inputRangeElem.addEventListener('input', (event) => {
  textElem.style.fontSize = event.currentTarget.value + 'px';
});