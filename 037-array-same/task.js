export const arraySame = (a, b) => {
    if (a === null || b === null || a === undefined || b === undefined) {
        return false;
    }

    if (a.length !== b.length) {
        return false;
    }

    const aSquared = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const num of a) {
        aSquared.push(num * num);
    }

    // eslint-disable-next-line no-shadow
    aSquared.sort((a, b) => a - b);
    // eslint-disable-next-line no-shadow
    b.sort((a, b) => a - b);

    for (let i = 0; i < aSquared.length; i++) {
        if (aSquared[i] !== b[i]) {
            return false;
        }
    }

    return true;
};
// eslint-disable-next-line max-len
console.log(arraySame([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
