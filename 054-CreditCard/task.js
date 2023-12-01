export const validate = (n) => {
    if (n <= 0 || n > 9999999999999999) {
        return false;
    }
    const digits = n.toString().split('').map(Number);

    let isSecondDigit = false;
    let sum = 0;

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];

        if (isSecondDigit) {
            digit *= 2;

            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isSecondDigit = !isSecondDigit;
    }

    return sum % 10 === 0;
};

console.log(validate(2121));
