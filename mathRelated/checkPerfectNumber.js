// We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

// Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
// Example:
// Input: 28
// Output: True
// Explanation: 28 = 1 + 2 + 4 + 7 + 14

var checkPerfectNumber = function(num) {
  /*
      I: a number
      O: a boolean
      C: none
      E: none?
      
      create a temp sum
      iterate to the num
          if the number is a divisor
              add it to the temp sum
      return the temp sum = number
  */
  if (num <= 0 ) return false
  let sum = 0;
  for (let i = 0; i < num; i++) {
      if (num % i === 0) {
          sum += i;
      }
  }
  return sum === num
};