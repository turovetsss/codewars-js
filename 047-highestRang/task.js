export const highestRank = (arr) => {
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (!frequency[num]) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }
    }

    let maxFrequency = 0;
    let mostFrequentNumber = 0;

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in frequency) {
        const currentFrequency = frequency[key];

        if (currentFrequency > maxFrequency) {
            maxFrequency = currentFrequency;
            mostFrequentNumber = parseInt(key, 10);
        } else if (currentFrequency === maxFrequency && parseInt(key, 10) > mostFrequentNumber) {
            // eslint-disable-next-line radix
            mostFrequentNumber = parseInt(key);
        }
    }

    return mostFrequentNumber;
};

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
