export const solve = (arr) => {
    const counter = {};
    arr.forEach((num) => {
        counter[num] = (counter[num] || 0) + 1;
    });

    const customSort = (a, b) => {
        if (counter[a] === counter[b]) {
            return a - b;
        }
        return counter[b] - counter[a];
    };

    arr.sort(customSort);

    return arr;
};

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
