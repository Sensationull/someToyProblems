// /* eslint-disable */

// Given a matrix of m x n elements (m rows, n columns),
// return all elements of the matrix in spiral order.

// const input1 = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];

// const input2 =
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ];
  
// const spiralOrder = grid => {
//   /*
//     create result arr
//     iterate through the grid
//       if the row < right bound
//         inc the col
//       if the col < lower bound
//         inc the row
//       if the row >= left bound
//         dec row  
//   */
//   const result = [];
//   let row = 0;
//   let col = 0;
//   let rightSide = grid[0].length;
//   let bottomSide = grid.length;
//   let leftSide = 0;
//   let top = 0;
//   let totalElements = grid[0].length * grid.length;
//   while (result.length < totalElements) {
//     console.log(rightSide, bottomSide, leftSide, top);
//     while (col < rightSide) {
//       result.push(grid[row][col]);
//       col++;
//     }
//   rightSide--;
//    col--;
//    row++
//    while (row < bottomSide) {
//     result.push(grid[row][col]);
//     row++;
//    }
//    bottomSide--;
//    row--;
//    col--
//    while (col >= leftSide) {
//       result.push(grid[row][col]);
//       col--
//    }
//    leftSide++;
//    col++;
//    row--;
//    while (row > top) {
//      result.push(grid[row][col]);
//      row--;
//    }
//    top++;
//     // console.log(result);
//   }
//   return result
// };

// // console.log(spiralOrder(input1)); // [1,2,3,6,9,8,7,4,5];
// console.log(spiralOrder(input2)); // [1,2,3,4,8,12,11,10,9,5,6,7];
