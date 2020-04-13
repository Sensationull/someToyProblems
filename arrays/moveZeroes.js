// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
  /*
      I: an array
      O: an array
      C: move in-place
      E: invalid input
      no zeroes
      
      iterate through the array
          if zero and no current temp,
          set temp to be this index
          if not zero && temp
          set array at temp to this number
          set array at this number to temp
          set the counter to temp
          reset temp;
  */
  let temp;
  for (let i = 0; i < nums.length; i++) {
      cur = nums[i];
      if (cur === 0 && temp === undefined) {
          temp = i;
      } else if (cur !== 0 && temp >= 0) {
          nums[temp] = nums[i];
          nums[i] = 0;
          i = temp;
          temp = undefined;
      }
  }
  return nums
};