export const FindNb = (m) => {
    let n = 1;
    let sum = 0;

    while (sum < m) {
        sum += n ** 3;
        n++;
    }
    const result = (sum === m) ? (n - 1) : -1;
    return result;
};

console.log(`2 is even = ${FindNb(4183059834009)}`);
