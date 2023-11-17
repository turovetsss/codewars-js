export const solution = (n) => {
    const mod = 1000000007;
    const dp = [];

    for (let i = 0; i <= n; i++) {
        dp.push(Array(10).fill(1));
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= 9; j++) {
            dp[i][j] = 0;
            // eslint-disable-next-line no-restricted-syntax, no-use-before-define
            for (const k of getAdjacentDigits(j)) {
                dp[i][j] = (dp[i][j] + dp[i - 1][k]) % mod;
            }
        }
    }

    let total = 0;
    for (let j = 1; j <= 9; j++) {
        total = (total + dp[n][j]) % mod;
    }

    return total;
};
function getAdjacentDigits(digit) {
    const adjacents = [];

    if (digit > 0) {
        adjacents.push(digit - 1);
    }
    if (digit < 9) {
        adjacents.push(digit + 1);
    }

    return adjacents;
}
console.log(solution(1));
