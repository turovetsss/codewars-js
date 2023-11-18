import { fizzbuzzPlusPlus } from './task';

test('', () => {
    expect(fizzbuzzPlusPlus([2, 3, 5], ['fizz', 'buzz', 'bazz'])).toStrictEqual([1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz',
        7, 'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz',
        13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz',
        19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz',
        'bazz', 'fizz', 'buzz', 'fizz', 29, 'fizzbuzzbazz']);
});
