/* eslint-disable */
let test = [
 [0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]
]; // maxAreaOfIsland(test) = 6

const maxAreaOfIsland = grid => {
  // create temp area counter
// create max area counter
// iterate through matrix
  // if curent value is = 1 
    // create helper function // this function needs the grid and coordinates?
      // check if left is = 1
      // check if right is = 1
      // check if top is = 1
      // check if down is = 1
        // if one inc temp area 
          // max = temp > max ?
          // temp = 0;
        // set one to null
      // if none of those is one then return
// return max area 
let temp = 0;
let max = 0;
 let helper = (matrix, x, y) => {
  if (!matrix[x][y] || matrix[x][y] === 0) {
    return
  }
  if (matrix[x][y] === 1) {
    temp++
    matrix[x][y] = null;
  }
  if (x - 1 >= 0 && matrix[x - 1][y] === 1) helper(matrix, x - 1, y)
  if (x + 1 < matrix.length && matrix[x + 1][y] === 1) helper(matrix, x + 1, y)
  if (y - 1 >= 0 && matrix[x][y - 1] === 1) helper(matrix, x, y - 1)
  if (y + 1 < matrix[x].length && matrix[x][y + 1] === 1) helper(matrix, x, y + 1)
}
for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        helper(grid, row, col);
        max = temp > max ? temp : max
        temp = 0;
      }
  }
}
return max
};

console.log( '-->', maxAreaOfIsland(test));// 6
