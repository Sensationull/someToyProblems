var twoSum = function(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let difference = target - current;
    if (map.hasOwnProperty(current)) {
      return [map[current], i];
    } else {
      map[difference] = i;
    }
  }

};

console.log('1 ',twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log('2 ',twoSum([2, 7, 11, 15], 18)); // 9