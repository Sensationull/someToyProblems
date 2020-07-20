// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.
var sortArrayByParityII = function(A) {
  /*
      create an even and odd array
      iterate over that array
      if the item is even even array
      if the item is odd odd array
      create a new result 
      iterate 
  */
  let even = [];
  let odd = [];
  let result = [];
  for (let i = 0; i < A.length; i++) {
      let item = A[i];
      if (item % 2 === 0) {
          even.push(item)
      } else {
          odd.push(item);
      }
  }
  
  for (let i = 0; i < A.length; i++) {
      if (i % 2 === 0) {
          result.push(even.pop())
      } else {
          result.push(odd.pop())
      }
  }
  return result;
};