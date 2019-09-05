function findLongestWord(string) {
    let longest = '';
    arrString = string.split(' ');
    arrString.forEach(word => {
        if (word.length > longest.length) {
            longest = word;
        }
       
    });
    return longest;
}
