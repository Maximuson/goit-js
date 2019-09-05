function checkForSpam(str) {
    const spamWords = ['spam', 'sale'];
    let isSpam= false;
    let string = str.toLowerCase();
    let arrString = string.split(' ');

    arrString.some(word => {
        spamWords.some(spamWord => {
            if (word.includes(spamWord)) {
                isSpam = true;
                return true;   
            }
        })
        if(isSpam) {
            return true
        }
    })
    
    return isSpam;
}