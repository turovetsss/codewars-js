export const isPangram = (str) => {
    const alp = 'abcdefghijklmnopqrstuvwxyz';
    const letters = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (/^[a-z]$/.test(char)) {
            letters[char] = true;
        }
    }
    for (let j = 0; j < alp.length; j++) {
        const letter = alp[j];
        if (!letters.includes(letter)) {
            return false;
        }
    }
    return true;
};

console.log(`2 is even = ${isPangram('The quick brown fox jumps over the lazy dog')}`);
