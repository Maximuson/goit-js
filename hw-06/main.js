import users from './users.js';

const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) => users.filter((user) => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));

const getUsersWithGender = (users, gender) => users.reduce((acc, e) => {
  e.gender === gender && acc.push(e.name);
  return acc;
}, []);

console.log(getUsersWithGender(users, 'male'));

const getInactiveUsers = (users) => users.filter((e) => !e.isActive);

console.log(getInactiveUsers(users));

const getUserWithEmail = (users, email) => users.find((e) => e.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => users.filter((user) => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));

const calculateTotalBalance = (users) => users.reduce((acc, e) => acc += e.balance,
  0);

console.log(calculateTotalBalance(users));

const getUsersWithFriend = (users, friendName) => users.filter((user) => user.friends.find((e) => e === friendName))
  .map((user) => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = (users) => users.sort((a, b) => a.friends.length - b.friends.length).map((e) => e.name);

console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = (users) => {
  const skills = [];
  users.forEach((e) => {
    skills.push(...e.skills);
  });
  return [...new Set(skills)].sort();
};

console.log(getSortedUniqueSkills(users));
