const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = (arr, productName) => {
  let result;
  arr.find((e) => {
    if (e.name === productName) {
      result = e.price * e.quantity;
    }
  });
  return result;
};
