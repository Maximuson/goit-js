const inputElement = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');

inputElement.addEventListener('keyup', () => {
  const setAnonymous = () => { spanElement.textContent = 'незнакомец'; };
  spanElement.textContent = inputElement.value;
  // eslint-disable-next-line no-unused-expressions
  inputElement.value === '' && setAnonymous();
});
