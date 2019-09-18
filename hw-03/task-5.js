const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
const getAllPropValues = (arr, prop) => {
  const result = [];
  arr.forEach((e) => {
    if (e[prop] !== undefined) {
      result.push(e[prop]);
    }
  });
  return result;
};
