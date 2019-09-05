function formatString(string) {
    let result = '';
    if (string.length <= 40) {
        result = string;
    }
    else {
        let charString = string.split('');
        let spliced = charString.slice(0, 40);
        let shortString = spliced.join('')
        result = shortString + '...'
    }
    return result
}