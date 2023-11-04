export const sortByLength = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].length > arr[j + 1].length) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
};
console.log(`2 is even = ${sortByLength(['Beg', 'Life', 'I', 'To'])}`);
