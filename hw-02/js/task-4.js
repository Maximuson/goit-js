function formatString(string) {
  let result = '';
  if (string.length <= 40) {
    result = string;
  } else {
    const charString = string.split('');
    const spliced = charString.slice(0, 40);
    const shortString = spliced.join('');
    result = `${shortString}...`;
  }
  return result;
}
