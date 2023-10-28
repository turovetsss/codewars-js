export const isEven = (number) => {
    if (typeof number !== 'number') {
        throw new Error('That\'s not number');
    }

    return number % 2 === 0;
};

console.log(`2 is even = ${isEven(2)}`);
