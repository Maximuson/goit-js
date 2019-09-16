
let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');

  numbers.push(+input);
  console.log(numbers);
} while (input !== null);

numbers.forEach((item) => {
  total += item;
});

console.log(total);
