/* eslint-disable */

let test = [
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','1']
]

// let test = [
//   [1,1,1,1,0],
//   [1,1,0,1,0],
//   [1,1,0,0,0],
//   [0,0,0,0,1]
// ]

const numIslands = grid => {
  // create a num counter
  // iterate through the grid
    // if the coordinates = '1'
      // call a helper function
      // inc count
  //return count
  let count = 0;
  function markIslandSeen(x, y) {
    if (x >= grid.length || x < 0 || y >= grid[x].length || y < 0) { // check the boundaries
      return
    }
    if (grid[x][y] !== '1') { // check the target
      return
    }
    grid[x][y] = null // since the target has to be '1', change it to null
    markIslandSeen(x + 1, y); // change all the adjacent ones to null so we don't iterate over them.
    markIslandSeen(x - 1, y);
    markIslandSeen(x, y + 1);
    markIslandSeen(x, y - 1);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        markIslandSeen(i, j);
        count++
      }
    }
  }
return count
  /* HELPER FUNCTION
    // if the number is out of bounds or '0', return number
    // if the number is one, turn it into null
    // find the left, right, top, and down numbers
      // call helper to turn those ones into nulls
  */
}

console.log( 'The test', numIslands(test)); // 2