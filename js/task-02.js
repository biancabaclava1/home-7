const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = ingredient;
  return ingredientElement;
});

ingredientList.append(...elements);
