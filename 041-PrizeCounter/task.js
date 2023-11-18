export const prizeCounter = (s) => {
    let score = 0;
    let streakCount = 0;
    let deactivated = '';

    for (let i = 0; i < s.length; i++) {
        if (deactivated === s[i]) {
            // eslint-disable-next-line no-continue
            continue;
        }

        score += 100;

        if (i >= 2 && s[i] === s[i - 1] && s[i] === s[i - 2]) {
            if (s[i] === 'R') {
                score += 500;
            } else if (s[i] === 'B') {
                score += 300;
            } else if (s[i] === 'G') {
                score += 200;
            }
            streakCount = 0;
            deactivated = s[i];
        } else {
            // eslint-disable-next-line no-unused-vars
            streakCount++;
        }
    }

    return score;
};
console.log(prizeCounter(['R', 'R', 'R', 'R']));
