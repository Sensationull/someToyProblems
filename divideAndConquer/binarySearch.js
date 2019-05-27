// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.
const tester = [-1,0,3,5,9,12];

// iterative
const search = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let midpoint = Math.floor((min + max) / 2);
    let currentVal = arr[midpoint];
    if (currentVal === val) return midpoint;
    if (currentVal < val) min = midpoint + 1;
    if (currentVal > val) max = midpoint - 1;
  }
  return -1;
}

// recursive
const bSearch = (arr, val) => {
  let min =0;
  let max = arr.length - 1;
  const helper = (start, end) => {
    if (start > end) return -1;
    const midpoint = Math.floor((start + end) / 2);
    const currentVal = arr[midpoint];
    if (currentVal === val) return midpoint;
    if (currentVal < val) return helper(midpoint + 1, end);
    if (currentVal > val) return helper(start, midpoint - 1);
  };
  return helper(min, max);
};

console.log( '-->', search(tester, 9)); // 4
console.log( '-->', search(tester, 2)); // - 1
console.log( '-->', bSearch(tester, 2)); // - 1
console.log( '-->', bSearch(tester, 9)); // - 4
