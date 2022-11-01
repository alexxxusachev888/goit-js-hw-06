const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListElem = document.querySelector('#ingredients');

const makeListOfIngredients = array => {
  return array.map(item => {
    const ingredientMarkup = document.createElement('li');
    ingredientMarkup.classList.add('item');
    ingredientMarkup.textContent = item;

    return ingredientMarkup;
  });
}

const ingredientsFunction = makeListOfIngredients(ingredients);

ingredientsListElem.append(...ingredientsFunction);