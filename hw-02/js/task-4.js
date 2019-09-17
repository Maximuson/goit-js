const formatString = (string) => {
  let result = '';
  if (string.length <= 40) {
    result = string;
  } else {
    result = `${string.slice(0, 40)}...`;
  }
  return result;
};
