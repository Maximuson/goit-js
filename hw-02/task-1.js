const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

users.shift();

users.pop();

users.unshift('Lux');

users.push('Jay', 'Kiwi');

const userToDelete = 'Ajax';

let indexToDelete = users.indexOf(userToDelete);

users.splice(indexToDelete, 1);

const userToInsert = 'Kong';
const insertBefore = 'Jay';

let indexInsertBefore = users.indexOf(insertBefore);


users.splice(indexInsertBefore, 1, insertBefore, userToInsert);

console.log(users);