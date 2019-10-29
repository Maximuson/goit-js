/* eslint-disable no-bitwise */
/* eslint-disable no-unused-vars */
const generateRandomColor = () => `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;

const boxes = document.querySelector('#boxes');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const countInput = document.querySelector('#count');

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

const createBox = (wrapper, size) => {
  const item = document.createElement('div');
  item.style.height = `${size}px`;
  item.style.width = `${size}px`;
  item.classList.add('box');
  item.backgroundColor = generateRandomColor();
  wrapper.appendChild(item);
};

const renderBoxes = (count) => {
  if (boxes.childElementCount > 0) {
    boxes.lastChild.setAttribute('id', '');
    boxes.lastChild.innerHTML = '';
  }
  const wrapper = document.createElement('div');
  let size = 30;
  size = 30 + 10 * boxes.childElementCount;
  for (let i = 0; i < count; i++) {
    createBox(wrapper, size);
    size += 10;
  }
  wrapper.lastChild.setAttribute('id', 'last');
  wrapper.firstChild.setAttribute('id', 'start');
  link = document.createElement('a');
  link.setAttribute('href', '#start');
  link.innerText = 'В начало';
  wrapper.lastChild.appendChild(link);
  boxes.insertAdjacentHTML('beforeend', wrapper.innerHTML);
};

renderBtn.addEventListener('click', () => {
  renderBoxes(countInput.value);
});
destroyBtn.addEventListener('click', destroyBoxes);

renderBoxes(30);
