const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = ingredients.map( ingredient => {
   const listItem = document.createElement('li');
   listItem.innerText = ingredient;
   listItem.classList = 'item';
   return listItem;
});

const list = document.getElementById("ingredients");

list.append(...listItems);