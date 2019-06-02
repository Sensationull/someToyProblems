/* eslint-disable */

var islandPerimeter = function(grid) {
  // create count variable
  // iterate until I fina one.
   // if a one is found
      // check if the left is not 1
      // check if the right is not 1
      // check if the top is not 1
      // check if the down is not 1
         // if any of these are not 1, increment the count
   let count = 0; 
   for(let i = 0; i < grid.length; i++) {
     for(let x = 0; x <grid[i].length; x++) {
       if (grid[i][x] === 1) {
         if (i-1 < 0 || grid[i -1][x] === 0) { // top
           count++
          }
          if (i + 1 >= grid.length || grid[i + 1][x] === 0) { // down
            count++
          } 
          if (x-1 < 0 || grid[i][x -1] === 0) { // left
            count++
          }
          if (x+1 >= grid[i].length || grid[i][x+1] === 0) { // right
            count++
         } 
       }
     }
   }
   return count
 };

// var test = [[1]]

var matrix = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
];
console.log( '-->', islandPerimeter(matrix)); // 16