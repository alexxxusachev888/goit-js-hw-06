let counterValue = 0;

const decrementButtonElem = document.querySelector('[data-action="decrement"]');
const incrementButtonElem = document.querySelector('[data-action="increment"]');
const counterDisplayElem = document.querySelector('#value');


decrementButtonElem.addEventListener('click', () => {
  counterValue -= 1;
  counterDisplayElem.textContent = counterValue;
});

incrementButtonElem.addEventListener('click', () => {
  counterValue += 1;
  counterDisplayElem.textContent = counterValue;
});