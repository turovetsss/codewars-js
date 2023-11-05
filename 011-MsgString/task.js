export const tops = (mgs) => {
    const array = mgs.split('');
    array.unshift('0');

    let start = 0;
    let step = 3;
    let amount = 2;

    let result = '';

    while (start < array.length) {
        let block = '';
        start += step;
        for (let j = start; j < start + amount; j++) {
            if (j >= array.length) {
                break;
            }
            block += (array[j]);
        }
        amount++;
        step += 4;
        result = block + result;
    }

    return result;
};
console.log(`${tops('123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123')}`);
