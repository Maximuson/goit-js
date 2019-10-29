const input = document.querySelector('#validation-input');

input.addEventListener('change', () => {
  console.log('changed');
  if (input.value.length === +input.getAttribute('data-length')) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
