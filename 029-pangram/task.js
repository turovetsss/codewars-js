export const isPangram = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = string.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        if (lowerCaseSentence.indexOf(letter) === -1) {
            return false;
        }
    }

    return true;
};
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
