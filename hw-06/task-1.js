import users from './users.js';

const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));
