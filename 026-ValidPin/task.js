export const validatePin = (pin) => {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9' || pin[i] === '') {
            return false;
        }
    }
    return true;
};
console.log(validatePin('-1234'));
