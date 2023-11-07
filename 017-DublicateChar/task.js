export const dublicateCount = (text) => {
    const str = text.toLowerCase();
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // eslint-disable-next-line no-restricted-globals, radix
        if (!isNaN(parseInt(char)) || char === '') {
            // eslint-disable-next-line no-continue
            continue;
        }
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    let count = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in charCount) {
        if (charCount[key] > 1) {
            count++;
        }
    }
    return count;
};
console.log(dublicateCount('aabBcde'));
