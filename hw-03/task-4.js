const countTotalSalary = (employees) => Object.entries(employees)
  .reduce((result, num) => result + num[1], 0);
