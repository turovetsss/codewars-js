/* eslint-disable no-param-reassign */
export const sortme = (names) => {
    for (let i = 0; i < names.length - 1; i++) {
        for (let j = 0; j < names.length - 1 - i; j++) {
            // eslint-disable-next-line no-use-before-define
            if (compareStrings(names[j], names[j + 1]) > 0) {
                const temp = names[j];
                names[j] = names[j + 1];
                names[j + 1] = temp;
            }
        }
    }
    return names;
};

function compareStrings(a, b) {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();

    if (lowerA < lowerB) {
        return -1;
    } if (lowerA > lowerB) {
        return 1;
    }
    return 0;
}
console.log(sortme(['Hello', 'there', "I'm", 'fine']));
