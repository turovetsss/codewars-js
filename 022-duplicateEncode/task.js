export const duplicateEncode = (word) => {
    const lowerCaseWord = word.toLowerCase();
    const charCount = {};
    for (let i = 0; i < lowerCaseWord.length; i++) {
        const char = lowerCaseWord[i];
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }
    let result = '';
    for (let i = 0; i < lowerCaseWord.length; i++) {
        const char = lowerCaseWord[i];
        if (charCount[char] > 1) {
            result += ')';
        } else {
            result += '(';
        }
    }
    return result;
};
console.log(duplicateEncode('din'));
