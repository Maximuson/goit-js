function calculateEngravingPrice(message, pricePerWord) {
    let arrWords = message.split(' ');
    let lenghtWords =  arrWords.length;
    let price = pricePerWord * lenghtWords;
    return price;
}