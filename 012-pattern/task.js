export const pattern = (n) => {
    const arr = [];
    let m = n - 1;
    for (let i = 0; i < n; i++) arr[i] = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = n % 10;
        }
    }
    let k = 1;
    for (let l = 0; l < n; l++) {
        for (let i = k; i < n; i++) {
            for (let j = k; j < n; j++) {
                arr[i][j] = m % 10;
            }
        }
        m--;
        k++;
    }

    let txt = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            txt += arr[i][j];
        }
        if (i !== n - 1) txt += '\n';
    }
    return txt;
};
console.log(`${pattern(1)}`);
