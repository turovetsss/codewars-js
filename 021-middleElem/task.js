// eslint-disable-next-line consistent-return
export const gimme = (triplet) => {
    const max = Math.max(...triplet);
    const min = Math.min(...triplet);
    for (let i = 0; i <= triplet.length; i++) {
        if (triplet[i] !== max && triplet[i] !== min) {
            return i;
        }
    }
};

console.log(gimme([[2, 3, 1]]));
