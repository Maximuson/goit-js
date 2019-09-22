const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
  { name: 'Радар', price: 2000, quantity: 4 },
];

const calculateTotalPrice = (arr, productName) => {
  let result = 0;
  arr.filter((e) => e.name === productName)
    .forEach((e) => result += e.price * e.quantity);
  return result;
};
