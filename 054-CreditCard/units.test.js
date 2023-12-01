import { validate } from './task';

test('Testing true numCarf', () => {
    expect(validate(2121)).toStrictEqual(true);
});
test('Testing false numCarf', () => {
    expect(validate(123456789123456789)).toStrictEqual(false);
});
