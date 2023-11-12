const sortString = (string) => string.split('').sort().join('');

export const isAnagram = (test, original) => {
    test.toLowerCase();
    original.toLowerCase();
    const sortedStr1 = sortString(test);
    const sortedStr2 = sortString(original);

    return sortedStr1 === sortedStr2;
};

console.log(isAnagram('foefet', 'toffee'));
