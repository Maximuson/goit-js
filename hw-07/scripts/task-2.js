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

const createListItem = (data) => {
  const item = document.createElement('li');
  item.innerText = data;
  wrapper.appendChild(item);
};

ingredients.forEach((e) => {
  createListItem(e);
});

list.insertAdjacentHTML('beforeend', wrapper.innerHTML);
