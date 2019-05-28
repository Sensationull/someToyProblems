/* eslint-disable */

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

/*
  naive:
  if the number is less than the start return 0
  if the number is greater than the end return arr lentgh + 1
  iterate though the array
  if the number is equal, return index
  if the number is greater than previous and less than current return index
  if the number is greater than previous and less than next return index + 1
  */
/*
  logn:
  if the number is less than the start return 0
  if the number is greater than the end return arr lentgh + 1
  iterate through the array
    calc midpoint
    set current
    if current = target, return midpoint
    if target is less than midpoint and not equal to midpoint - 1 but greater than midpoint - 1,
      return index 
    else 
      set max to midpoint - 1;
    if target is greater than midpoint and not equal to midpoint + 1 but less than midpoint + 1,
      return index
    else 
      set min to midpoint + 1;
*/

const test = [1,3,5,6,8,10,20,34];
const insert = 4;
/* LogN recursive solution */
/* LogN iterative solution */
// const searchInsert = (arr, target) => {
//   if (target < arr[0] || target === arr[0]) return 0;
//   if (target > arr[arr.length - 1]) return arr.length;
//   if (target === arr[arr.length - 1]) return arr.length - 1;
//   let min = 0;
//   let max = arr.length - 1;
//   while (min <= max) { // [1,3]
//     const midpoint = Math.floor((min + max) / 2); // 0
//     const current = arr[midpoint];// 1
//     if (current === target) { // 1 !== 2
//       return midpoint;
//     }
//     if (target < current && target > arr[midpoint - 1]) { // 2 !< 1 
//       return midpoint;
//     } else if (target < current) {
//       max = midpoint - 1;
//     }
//     if (target > current && target < arr[midpoint + 1]) { // 2 > 1
//       return midpoint + 1;
//     } else if (target > current) { // 2 > 1
//       min = midpoint + 1;
//     }
//   }
// };

/* Linear solution */
// const searchInsert = (arr, target) => {
//   if (target < arr[0]) return 0;
//   if (target > arr[arr.length - 1]) return arr.length;
//   for (let i = 0; i < arr.length; i += 1) {
//     const current = arr[i];
//     if (current === target) {
//       return i;
//     }
//     if (target > arr[i - 1] && target < current) {
//       return i;
//     }
//     if (target > arr[i - 1] && target < arr[i + 1]) {
//       return i + 1;
//     }
//   }
// };

// console.log(searchInsert([1,3,5,6], 5)); // 2
// console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,3,5,6], 2)); // 1
// console.log(searchInsert([1,3,5,6], 0)); // 0
// console.log(searchInsert([1,3], 2)); // 1
// console.log(searchInsert([1,3,5], 4)); // 2
// console.log(searchInsert([3,6,7,8,10], 5)); // 2
// console.log(searchInsert([1,2,3,4,5,10], 2)) // 2
