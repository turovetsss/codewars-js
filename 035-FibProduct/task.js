// eslint-disable-next-line consistent-return
export const findOdd = (A) => {
    const frequency = {};

    for (let i = 0; i < A.length; i++) {
        if (frequency[A[i]] === undefined) {
            frequency[A[i]] = 1;
        } else {
            frequency[A[i]] += 1;
        }
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const key in frequency) {
        if (frequency[key] % 2 !== 0) {
            return parseInt(key, 10);
        }
    }
};
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
