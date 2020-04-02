var maxSubArray = function(nums) {
  /*
      I: an array
      O: a number
      C: Linear time then faster?
      E: Invalid input
      
      probably will need pointers
      make a start pointer
      make a stop pointer
      make a max sum pointer set to the first item in the array
      make a temp sum pointer set to the first item in the array
      
      iterate through the array starting at the second item in the array
      add the current item to the temp sum
      if the temp sum is greater than the max sum, make the max sum the temp sum
      if the temp sum is less than the max sum, make the temp sum the value at 
  */
  let sum = nums[0];
  let max = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      sum < 0 ? (sum = nums[i]) : (sum += nums[i]);
      if (sum > max) max = sum;
  }
  return max
};