const findBestEmployee = (employees) => {
  let maxNumber = Object.values(employees)[0];
  let bestEmployee = '';
  Object.entries(employees)
    .forEach((e) => {
      if (e[1] > maxNumber) {
        [bestEmployee, maxNumber] = e;
      }
    });
  return bestEmployee;
};
