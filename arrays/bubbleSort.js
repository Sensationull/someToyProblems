var bubbleSort = function(nums) {
  /*
      I: an array
      O: a sorted array
      C: none
      E: invalid input
      
      if no arr length return
      
      bubbleSort
          is the current number > than the next?
              if so, swap them
              if not move onto the next number
      it needs to start always at the first index
  */
  let temp = 0;
  if (!nums) return [];
      let bubble = (arr, i) => {
          if (i >= arr.length) return
          if (arr[i] > arr[i + 1]) { // 5 > 1 yes // 2 > 5 ? no
              temp = arr[i + 1]; // temp = 1
              arr[i + 1] = arr[i]; // arr[1] = 5
              arr[i] = temp; // arr[0] = 1
              // console.log(arr)
              bubble(arr, 0) // [1,5,1,2,0,0], 2
          
          } else {
              bubble(arr, i + 1 ) // 
          }
      }
      bubble(nums, 0);
      return nums
};

console.log(bubbleSort([5,2,3,1]));
console.log(bubbleSort([5,1,1,2,0,0]));