function calculateEngravingPrice(message, pricePerWord) {
  const arrWords = message.split(' ');
  const lenghtWords = arrWords.length;
  const price = pricePerWord * lenghtWords;
  return price;
}
