const userInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

userInput.addEventListener('input', () => {
  output.textContent = userInput.value || 'незнакомец';
});
