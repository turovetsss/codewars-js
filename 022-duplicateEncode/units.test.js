import { duplicateEncode } from './task';

test('Тест 1:', () => {
    expect(duplicateEncode('din')).toBe('(((');
});
test('Тест 2:', () => {
    expect(duplicateEncode('Success')).toBe(')())())');
});
