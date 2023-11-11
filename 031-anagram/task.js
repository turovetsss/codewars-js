export const isAnagram = (test, original) => {
    test.toLowerCase();
    original.toLowerCase();
    const sortedStr1 = test.split('').sort().join('');
    const sortedStr2 = original.split('').sort().join('');

    return sortedStr1 === sortedStr2;
};
console.log(isAnagram('foefet', 'toffee'));
