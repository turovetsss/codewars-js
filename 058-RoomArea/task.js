export const largestRoomArea=(rooms)=>{
  let maxArea = 0;
 
   function dfs(i, j, area) {
 
     if (i < 0 || i >= rooms.length || j < 0 || j >= rooms[0].length || rooms[i][j] === 1) {
       return area;
     }
     rooms[i][j] = 1; 
     area += 1;
     area = dfs(i + 1, j, area);
     area = dfs(i - 1, j, area);
     area = dfs(i, j + 1, area);
     area = dfs(i, j - 1, area);
     
     return area;
   }
   for (let i = 0; i < rooms.length; i++) {
     for (let j = 0; j < rooms[0].length; j++) {
       if (rooms[i][j] === 0) {
         let area = dfs(i, j, 0);
         maxArea = Math.max(maxArea, area);
       }
     }
   }
   
   return maxArea;
 }
console.log(largestRoomArea( [[1,1,1,1,1,1], 
  [1,0,1,0,0,1], 
  [1,0,1,0,0,1], 
  [1,1,1,1,1,1]]));
