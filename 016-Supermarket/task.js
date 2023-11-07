export const queueTime = (customers, n) => {
    const tills = Array(n).fill(0);

    // eslint-disable-next-line no-restricted-syntax
    for (const customer of customers) {
        const minTime = Math.min(...tills);
        const minIndex = tills.indexOf(minTime);
        tills[minIndex] += customer;
    }

    let maxTime = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const time of tills) {
        if (time > maxTime) {
            maxTime = time;
        }
    }

    return maxTime;
};
console.log(queueTime([], 1));
