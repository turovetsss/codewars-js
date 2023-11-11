export const getDomainName = (url) => {
    if (url.startsWith('http://')) {
        // eslint-disable-next-line no-param-reassign
        url = url.slice(7);
    } else if (url.startsWith('https://')) {
        // eslint-disable-next-line no-param-reassign
        url = url.slice(8);
    }
    const parts = url.split('/');
    const domain = parts[0].split('.');
    return domain[0];
};
console.log(getDomainName('http://google.com'));
