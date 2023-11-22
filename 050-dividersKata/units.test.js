import { getDividers } from './task';

test('Should return all the dividers of the product of those prime numbers', () => {
    expect(getDividers([11, 113], [1, 1])).toStrictEqual([1, 11, 113, 1243]);
});
