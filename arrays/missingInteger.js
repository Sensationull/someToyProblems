/* eslint-disable */
/* 
  don't need the error reminders for reduce,
  stylistically reduce can reassign it's accumulator 
*/
function missingInteger(A) {
    /*
      input: array
      output: number
      constraints: number > 0
      edgecases: arrays full of negative numbers should return 1 
      
      [1,2,3] // 4
      [1,2,4] // 3
      [1,3,6,4,1,2] // 5 
      [-1,-3] // 1
      [-1, 1] // 2
      
      find the largest number
      if the largest number is > 0
        find the difference of every number in the array and see if it is included in the array
            if it is not
            return that number
            if every number is included
            return largest + 1 
      if the largest number <= 0
        return 1
    */
  const largest = A.reduce((a, b) => {
    const max = b > a ? b : a;
    a = max
    return a;
  }, A[0]);
  if (largest <= 0) {
    return 1;
  }
  if (largest > 0) {
    for (let i = 0; i < A.length; i++) {
      let current = A[i];
      if (!A.includes(largest - current) && largest - current > 0) {
        return largest - current;
      }
    }
    return largest + 1;
  }
}
