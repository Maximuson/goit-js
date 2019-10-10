import users from './users.js';

const getInactiveUsers = (users) => users.filter((e) => !e.isActive);

console.log(getInactiveUsers(users));
