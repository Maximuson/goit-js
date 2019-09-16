function checkForSpam(str) {
  const spamWords = ['spam', 'sale'];
  let isSpam = false;
  const string = str.toLowerCase();
  const arrString = string.split(' ');

  arrString.some((word) => {
    spamWords.some((spamWord) => {
      if (word.includes(spamWord)) {
        isSpam = true;
        return true;
      }
    });
    if (isSpam) {
      return true;
    }
  });

  return isSpam;
}
