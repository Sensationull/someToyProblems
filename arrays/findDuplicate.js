const findDuplicate = (nums) => {
  nums = nums.sort((a,b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) return nums[i];
  }
};

findDuplicate([1, 3, 4, 2, 2]); // 2
