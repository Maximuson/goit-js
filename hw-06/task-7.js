import users from './users.js';

const calculateTotalBalance = (users) => users.reduce((acc, e) => acc += e.balance,
  0);

console.log(calculateTotalBalance(users));
