const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const wrapper = document.createElement('div');
const list = document.querySelector('#ingredients');
const elements = ingredients.map(e => {
  const item = document.createElement('li');
  item.innerText = e;
  return item;
});

list.append(...elements);
