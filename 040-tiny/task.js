export const f = (a = `${1 / 0}`) => a[6] + a[5] + a[4] + a[7];
console.log(f());
