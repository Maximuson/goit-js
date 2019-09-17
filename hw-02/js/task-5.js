const checkForSpam = (str) => {
  const textToCheck = str.toLowerCase();
  return textToCheck.includes('spam') || textToCheck.includes('sale');
};
