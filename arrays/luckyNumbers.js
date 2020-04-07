// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

var luckyNumbers  = function(matrix) {
  // find row candidates by min in row
  let rowCandidates = [];
  for (let i = 0; i < matrix.length; ++i) {
    rowCandidates.push(Math.min.apply(null, matrix[i]));
  }
  
  // find col candidates by max in col
  let colCandidates = []
  for (let i = 0; i < matrix[0].length; ++i) {
    colCandidates.push(Math.max.apply(null, matrix.map(x => x[i])));
  }

  // return intersection of row and col candidates  
  return rowCandidates.filter(x => colCandidates.includes(x));
};