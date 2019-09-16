function findLongestWord(string) {
  let longest = '';
  const arrString = string.split(' ');
  arrString.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
