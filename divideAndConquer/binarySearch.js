// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.
const tester = [-1,0,3,5,9,12];


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

console.log( '-->', search(tester, 9)); // 4
console.log( '-->', search(tester, 2)); // - 1
