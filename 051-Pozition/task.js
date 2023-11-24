export const posAverage = (s) => {
    const substrings = s.split(', ');
    let totalPositions = 0;
    let commonPositions = 0;

    for (let i = 0; i < substrings.length - 1; i++) {
        for (let j = i + 1; j < substrings.length; j++) {
            for (let k = 0; k < substrings[i].length; k++) {
                if (substrings[i][k] === substrings[j][k]) {
                    commonPositions++;
                }
                totalPositions++;
            }
        }
    }

    // eslint-disable-next-line no-mixed-operators
    return commonPositions / totalPositions * 100;
};

console.log(posAverage('466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096'));
