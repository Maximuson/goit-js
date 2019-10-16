import users from './users.js';

const getUserNames = (users) => users.map(({ name }) => name);

console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));

const getUsersWithGender = (users, gender) => users.reduce(
  (acc, elem) => (elem.gender === gender ? [...acc, elem.name] : [...acc]),
  [],
);

console.log(getUsersWithGender(users, 'male'));

const getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(users));

const getUserWithEmail = (users, mail) => users.find(({ email }) => email === mail);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => users.filter(({ age }) => age >= min && age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));

const calculateTotalBalance = (users) => users.reduce((acc, { balance }) => acc += balance,
  0);

console.log(calculateTotalBalance(users));

const getUsersWithFriend = (users, friendName) => users.filter(({ friends }) => friends.find((e) => e === friendName))
  .map((user) => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = (users) => users.sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = (user) => {
  const skillsResult = user.reduce((acc, { skills }) => [...acc, ...skills], []);
  return [...new Set(skillsResult)].sort();
};

console.log(getSortedUniqueSkills(users));
