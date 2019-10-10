import users from './users.js';

const getSortedUniqueSkills = (users) => {
  const skills = [];
  users.forEach((e) => {
    skills.push(...e.skills);
  });
  return [...new Set(skills)].sort();
};

console.log(getSortedUniqueSkills(users));
