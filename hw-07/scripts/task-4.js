const counterWrapperElement = document.querySelector('#counter');

const valueElement = document.querySelector('#value');
valueElement.textContent = 0;

counterWrapperElement.addEventListener('click', (e) => {
  const action = e.target.getAttribute('data-action');
  if (action === 'increment') {
    valueElement.textContent = +valueElement.textContent + 1;
  } else if (action === 'decrement') {
    valueElement.textContent = +valueElement.textContent - 1;
  }
});
