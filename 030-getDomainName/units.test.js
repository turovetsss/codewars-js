import { getDomainName } from './task';

test('', () => {
    expect(getDomainName('http://google.com')).toBe('google');
});
test('', () => {
    expect(getDomainName('https://youtube.com')).toBe('youtube');
});
