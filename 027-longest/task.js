export const longestConsec = (strarr, k) => {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return '';
    }
    let longestString = '';
    for (let i = 0; i <= strarr.length - k; i++) {
        const currentString = strarr.slice(i, i + k).join('');
        if (currentString.length > longestString.length) {
            longestString = currentString;
        }
    }
    return longestString;
};
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2));
