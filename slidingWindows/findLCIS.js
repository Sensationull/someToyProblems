const findLengthOfLCIS = (nums) => {
  /*
    create counter variable set to one
    create max
    if array length = 0,
      return 0
    iterate through array
      if element is > than previous,
        inc count
        if count > max
          max = count
      else
      reset count 1
    return max > 0 if so, return max else 1?
  */
  if (nums.length === 0) return 0;
  let count = 1;
  let max = 0;
  for (let i = 1; i < nums.length; i + 1) {
    const cur = nums[i];
    const previous = nums[i - 1];
    if (cur > previous) {
      count += 1;
      max = count > max ? count : max;
    } else {
      count = 1;
    }
  }
  return max > 0 ? max : 1;
};


const input1 = [1, 3, 5, 4, 7]; // 3 // [1,3,5]
const input2 = [2, 2, 2, 2, 2]; // 1 // [2];
const test = [1, 3, 5, 7];
const input3 = [-2, -12, -200, -1300]; // 1 // [-2];
const input4 = [1, 3, 5, 4, 2, 3, 4, 5]; // 4
console.log( '-->', findLengthOfLCIS(input1)); // 3
console.log( '-->', findLengthOfLCIS(test)); // 4
console.log( '-->', findLengthOfLCIS(input2)); // 1
console.log( '-->', findLengthOfLCIS(input3)); // 1
console.log( '-->', findLengthOfLCIS(input4)); // 4
