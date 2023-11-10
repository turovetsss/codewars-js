export const gitPow = (n, p) => {
    const digits = n.toString().split('').map(Number);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i] ** (p + i);
    }
    if (sum % n === 0) {
        return sum / n;
    }
    return -1;
};
console.log(gitPow(89, 1));
