export const sumDigPow = (a, b) => {
    const numbers = [];

    for (let n = a; n <= b; n++) {
        const digits = n.toString();
        let sum = 0;

        for (let i = 0; i < digits.length; i++) {
            const digit = parseInt(digits[i], 10);
            sum += digit ** (i + 1);
        }

        if (sum === n) {
            numbers.push(n);
        }
    }

    return numbers;
};

console.log(sumDigPow(10, 100));
