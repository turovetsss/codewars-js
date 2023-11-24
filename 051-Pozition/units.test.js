import { posAverage } from './task';

test('The function returns the percentage formatted as a float with 10 decimals', () => {
    expect(posAverage('466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096')).toStrictEqual(26.666666666666668);
});
