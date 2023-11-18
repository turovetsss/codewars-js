export const fizzbuzzPlusPlus = (numbers, words) => {
    let numFound = 0;
    let n = 1;
    const arr = [];
    while (numFound !== words.length) {
        numFound = 0;
        arr[n - 1] = '';
        for (let i = 0; i < numbers.length; i++) {
            if (n % numbers[i] === 0) {
                arr[n - 1] += words[i];
                numFound++;
            }
        }
        if (numFound === 0) {
            arr[n - 1] = n;
        }
        n++;
    }
    return arr;
};

console.log(fizzbuzzPlusPlus([2, 3, 5], ['fizz', 'buzz', 'bazz']));
