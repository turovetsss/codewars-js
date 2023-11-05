import { tops } from './task';

test('', () => {
    expect(tops('123456789abcdefghijklmnopqrstuwyxvzABCDEFGHIJKLMNOPQRSTUWvXYZ123456789012345678910123')).toBe('7891012TUWvXYABCDElmnoabc34');
});
