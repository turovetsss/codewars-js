export const solution=(str)=>{
  const pairs = [];
 let pair = '';
 
 for (let i = 0; i < str.length; i++) {
   pair += str[i];
   
   if (pair.length === 2) {
     pairs.push(pair);
     pair = '';
   }
 }
 
 if (pair.length === 1) {
   pairs.push(pair + '_');
 }
 
 return pairs;
}
console.log(solution('abcdef'));
