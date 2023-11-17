export const lucasnum = (n) => {
    if (n === 0) {
        return 2;
    }
    if (n === 1) {
        return 1;
    }

    if (n > 0) {
        return lucasnum(n - 1) + lucasnum(n - 2);
    }
    return lucasnum(n + 2) - lucasnum(n + 1);
};
console.log(lucasnum(-10));
