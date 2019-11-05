const counterWrapperElement = document.querySelector('#counter');
const valueElement = document.querySelector('#value');
valueElement.textContent = 0;

const actions = {
  state: {
    value: 0,
  },
  decrement() {
    this.state.value -= 1;
  },
  increment() {
    this.state.value += 1;
  },
};

const changeValue = ({ target }) => {
  actions[target.dataset.action]();
  value.textContent = actions.state.value;
};

counterWrapperElement.addEventListener('click', changeValue);
