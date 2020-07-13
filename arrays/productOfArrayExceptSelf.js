/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  /*
      I: an array of numbers
      O: an array of numbers
      C: linear, no division
      E: invalid array.
      
      
      
       i
      [1,2,3,4]
         j
         temp = 2;
      i
      [1,2,3,4]
           j
         temp = 6;
      i
      [1,2,3,4]
             j
         temp = 24;
      push temp to array
      start over, reset temp and j
         i
      [1,2,3,4]
       j
         temp = 1;
         i
      [1,2,3,4]
         j
          temp = 1;
         i
      [1,2,3,4]
           j
           temp = 3
           i
      [1,2,3,4]
             j
           temp = 12
      [24,12,8,6]
      
      if no array return empty array
      create a i,j pointer 
      create a temp 
      create a result array
      while i pointer is less than input array length;
          if j is greater than zero and i doesn't equal j
          multiply sum by j pointer
          increment j
          if i = j 
              increment j
          if j is out of bounds
              increment i 
              reset j
              push temp to result
              reset temp
      return result
  */
  
  if (!nums.length) return [];
  let result = [];
  let i = 0;
  let j = 0;
  let sum = 1;
  
  while (i < nums.length) {
      if (j >= 0 && i !== j) {
          sum *= nums[j]
          j++;
      }
      if (i === j) {
          j++;
      }   
      if (j >= nums.length) {
          i++
          j = 0;
          result.push(sum);
          sum = 1;
      }
  }
  return result;
};