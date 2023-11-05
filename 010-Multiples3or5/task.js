export const Solution = (number) => {
    if (number < 10) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};
console.log(`2 is even = ${Solution(10)}`);
