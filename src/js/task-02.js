const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listToUpdate = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredient;
  listItemEl.classList.add("item");
  return listItemEl;
});

listToUpdate.append(...elements);





