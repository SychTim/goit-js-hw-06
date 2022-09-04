const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elIngredients = document.querySelector('#ingredients');

const elsItems = ingredients.map((ingredient) => {
  const elItem = document.createElement('li');
  elItem.classList.add('item');
  elItem.textContent = ingredient;
  return elItem;
});

elIngredients.append(...elsItems);