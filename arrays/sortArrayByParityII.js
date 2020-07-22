// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.
// var sortArrayByParityII = function(A) {
//   /*
//       create an even and odd array
//       iterate over that array
//       if the item is even even array
//       if the item is odd odd array
//       create a new result 
//       iterate 
//   */
//   let even = [];
//   let odd = [];
//   let result = [];
//   for (let i = 0; i < A.length; i++) {
//       let item = A[i];
//       if (item % 2 === 0) {
//           even.push(item)
//       } else {
//           odd.push(item);
//       }
//   }
  
//   for (let i = 0; i < A.length; i++) {
//       if (i % 2 === 0) {
//           result.push(even.pop())
//       } else {
//           result.push(odd.pop())
//       }
//   }
//   return result;
// };

var sortArrayByParityII = function(array) {
  /*
      sorting in place
      create a temp 
      create a lastOdd
      create a lastEven
      iterate through the array
      if (i is odd)
          see if the current item is odd
          if the current item is even
              while current item is not odd
                  let last odd = i
                  if array at last odd is not odd
                  increment last odd;
                  if array at last odd is odd
                  let temp become current
                  let current become array at last odd;
                  let array at last odd become temp;
                  break;
          do the opposite for evens
  */
  
  let temp = 0;
  let lastOdd = 0;
  let lastEven = 0;
  for (let i = 0; i < array.length; i++) {
      let current = array[i];
      if (i % 2 === 0 && array[i] % 2 !== 0) {
          lastEven = 0;
          while (array[i] % 2 !== 0) {
              if (array[lastEven] % 2 === 0) {
                  temp = current;
                  array[i] = array[lastEven];
                  array[lastEven] = current
                  current = array[i];
                  break;
              } else {
                  lastEven++;
              }
          }
      }
      if (i % 2 !== 0 && current % 2 === 0) {
          lastOdd = 1;
          while (current % 2 === 0) {
              if (array[lastOdd] % 2 === 0) {
                  temp = current;
                  array[i] = array[lastOdd];
                  array[lastOdd] = current;
                  current = array[i];
                  break;
              } else {
                  lastOdd++;
              }
          }
      }
  }
  return array;
};

console.log(sortArrayByParityII([4,2,5,7]))