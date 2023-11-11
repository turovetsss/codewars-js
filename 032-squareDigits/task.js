export const squereDigits = (num) => {
    const str = num.toString();
    let squaredDigits = '';

    for (let i = 0; i < str.length; i++) {
        const digit = parseInt(str.charAt(i), 10);
        squaredDigits += digit ** 2;
    }

    return parseInt(squaredDigits, 10);
};
console.log(squereDigits(3212));
