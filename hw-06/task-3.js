import users from './users.js';

const getUsersWithGender = (users, gender) => users.reduce((acc, e) => {
  e.gender === gender && acc.push(e.name);
  return acc;
}, []);

console.log(getUsersWithGender(users, 'male'));
