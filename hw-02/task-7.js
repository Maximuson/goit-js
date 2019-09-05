'use strict'

let input;
const numbers = [];
let total = 0;
let i = 0;
do {
    input = prompt('Введите число')

    numbers.push(+input)
    console.log(numbers)

    //Выход из вечного
    if(i==50) {
        break
    }
    i++;
} while (input !== null)

numbers.forEach(item => {
    total += item
});

console.log(total)