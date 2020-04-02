/** on the right track with the flag/ try again later */
var closedIsland = function(grid) {
  /*
      I: a matrix
      O: a number
      C: an totally closed island consists of 0's completely surrounded by 1's 
      E: invalid input?
      
      make a copy of the grid
          iterate through the grid until you found a zero
          once a zero is found
              look to the top, see if it is a one || out of bounds
                  if it's not out of bounds
                      go there
                      make it null
                      repeat the search
              look to the left, see if it is a one || out of bounds
              look to the bottom, see if it is a one || out of bounds
              look to the right, see if it is a one || out of bounds
      make a counter
      make a helper to recursively search?
  */
  let copy = [];
  let count = 0;
  if (!grid) return count;
  for (let row of grid) {
      copy.push([...row]);
  }
  
  const helper = (matrix, row, col) => {
      if (matrix[row[col] === 0]) {
          matrix[row][col] = null;
      }
      
      if (row - 1 >= 0 && row + 1 <= matrix.length - 1 && col - 1 >= 0 && col + 1 <= matrix[row].length - 1) {
          helper(matrix, row - 1, col)
          helper(matrix, row + 1, col)
          helper(matrix, row, col + 1)
          helper(matrix, row, col - 1)
      }
  }
  
  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col] === 0) {
              helper(grid, row, col);
          }
      }
  }
  console.log(grid, count)
};