// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

var smallerNumbersThanCurrent = function(nums) {
  /*
      I: an array
      O: an array
      C: none
      E: none
      
      if no valid input, return []
      create a map
      iterate through the map, index : value
          iterate through the array
              if the current value is less than the current item
              increment the count
          push the count to a new array
          reset the count
      return the new array
  */
  let result = [];
  if (!nums.length) return result
  let map = {};
  for (let i = 0; i < nums.length; i++) {
      let value = nums[i];
      map[i] = value;
  }
  for (let key in map) {
      let count = 0;
      for (let item of nums) {
          if (map[key] > item) count++
      }
      result.push(count);
  }
  return result
};