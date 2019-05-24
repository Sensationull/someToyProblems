/* eslint-disable */
let grid = 
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]];

 function islandPerimeter(matrix) {
  let count = 0; 
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        if(row - 1 < 0 || matrix[row - 1][col] === 0) count++
        if(row + 1 >= matrix.length || matrix[row + 1][col] === 0) count++
        if(col - 1 < 0 || matrix[row][col - 1] === 0) count++
        if(col + 1 >= matrix[row].length || matrix[row][col + 1] === 0) count++
      }
    }
  }
  return count
}

console.log(islandPerimeter(grid)); //16
