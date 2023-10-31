export const Summation = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
};

console.log(`2 is even = ${Summation(2)}`);
