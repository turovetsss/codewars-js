import { revrot } from './task';

test('Put together these modified chunks and return the result as a string', () => {
    expect(revrot('1234', 0)).toStrictEqual('');
});
