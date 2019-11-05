/* eslint-disable no-bitwise */
/* eslint-disable no-unused-vars */

class SizibleList {
  constructor(startCount) {
    this._startCount = startCount;
    this.size = 30;

    this.refs = {
      boxes: document.querySelector('#boxes'),
      renderBtn: document.querySelector('button[data-action="render"]'),
      destroyBtn: document.querySelector('button[data-action="destroy"]'),
      countInput: document.querySelector('#count'),
    };

    this.refs.renderBtn.addEventListener('click', () => {
      this.renderBoxes(this.refs.countInput.value);
    });
    this.refs.destroyBtn.addEventListener('click', this.destroyBoxes);
    this.startCount && this.renderBoxes(this.startCount);
  }

  _generateRandomColor = () =>
    `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;

  _changeBiggestBoxSize() {
    this.size = 30 + 10 * this.refs.boxes.childElementCount;
  }

  destroyBoxes = () => {
    refs.boxes.innerHTML = '';
  };

  createBox = (wrapper, size) => {
    const item = document.createElement('div');
    item.style.height = `${size}px`;
    item.style.width = `${size}px`;
    item.classList.add('box');
    item.backgroundColor = this._generateRandomColor();
    wrapper.appendChild(item);
  };

  renderBoxes(count) {
    const wrapper = document.createElement('div');
    const _renderLinks = () => {
      wrapper.lastChild.setAttribute('id', 'last');
      wrapper.firstChild.setAttribute('id', 'start');
      const link = document.createElement('a');
      link.setAttribute('href', '#start');
      link.innerText = 'В начало';
      wrapper.lastChild.appendChild(link);
      this.refs.boxes.insertAdjacentHTML('beforeend', wrapper.innerHTML);
    };
    const _changeLastBox = () => {
      console.log(this);
      if (this.refs.boxes.childElementCount > 0) {
        this.refs.boxes.lastChild.setAttribute('id', '');
        this.refs.boxes.lastChild.innerHTML = '';
      }
    };

    this._changeBiggestBoxSize();
    _changeLastBox();
    for (let i = 0; i < count; i++) {
      this.createBox(wrapper, this.size);
      this.size += 10;
    }
    _renderLinks();
  }
}

const sizibleList = new SizibleList(20);
// const generateRandomColor = () =>
//   `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;

// const refs = {
//   boxes: document.querySelector('#boxes'),
//   renderBtn: document.querySelector('button[data-action="render"]'),
//   destroyBtn: document.querySelector('button[data-action="destroy"]'),
//   countInput: document.querySelector('#count'),
// };

// const destroyBoxes = () => {
//   refs.boxes.innerHTML = '';
// };

// const createBox = (wrapper, size) => {
//   const item = document.createElement('div');
//   item.style.height = `${size}px`;
//   item.style.width = `${size}px`;
//   item.classList.add('box');
//   item.backgroundColor = generateRandomColor();
//   wrapper.appendChild(item);
// };

// const renderBoxes = count => {
//   if (refs.boxes.childElementCount > 0) {
//     refs.boxes.lastChild.setAttribute('id', '');
//     refs.boxes.lastChild.innerHTML = '';
//   }
//   const wrapper = document.createElement('div');
//   let size = 30;
//   size = 30 + 10 * refs.boxes.childElementCount;
//   for (let i = 0; i < count; i++) {
//     createBox(wrapper, size);
//     size += 10;
//   }
//   wrapper.lastChild.setAttribute('id', 'last');
//   wrapper.firstChild.setAttribute('id', 'start');
//   link = document.createElement('a');
//   link.setAttribute('href', '#start');
//   link.innerText = 'В начало';
//   wrapper.lastChild.appendChild(link);
//   refs.boxes.insertAdjacentHTML('beforeend', wrapper.innerHTML);
// };

// refs.renderBtn.addEventListener('click', () => {
//   renderBoxes(refs.countInput.value);
// });
// refs.destroyBtn.addEventListener('click', destroyBoxes);

// renderBoxes(30);
