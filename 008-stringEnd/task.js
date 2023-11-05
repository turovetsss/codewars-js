export const StringEnd = (str, ending) => {
    if (ending.length > str.length) {
        return false;
    }
    for (let i = ending.length - 1; i >= 0; i--) {
        if (ending[i] !== str[str.length - ending.length + i]) {
            return false;
        }
    }
    return true;
};
console.log(`2 is even = ${StringEnd('abcde', 'cde')}`);
