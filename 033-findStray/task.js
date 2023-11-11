// eslint-disable-next-line consistent-return
export const stray = (numbers) => {
    const count = {};

    for (let i = 0; i < numbers.length; i++) {
        if (count[numbers[i]]) {
            count[numbers[i]]++;
        } else {
            count[numbers[i]] = 1;
        }
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const num in count) {
        if (count[num] === 1) {
            return parseInt(num, 10);
        }
    }
};
console.log(stray([1, 1, 2]));
