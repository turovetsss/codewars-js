import { dirReduc } from './task';

test('', () => {
    expect(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])).toStrictEqual(['WEST']);
});
