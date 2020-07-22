  /*
    Inputs: two arrays
    Outputs: one new array
    Constraints: sorted in ascending order
    Edge Cases: n/a
    
    arr1 = [1, 2, 3, 5, 6, 7], 
    arr2 = [3, 6, 7, 8, 20]
    
    result = [3, 6, 7]
    
    create dupe array
    iterate through array one 
      iterate through array two 
        if the item in array two is in array one
          put that item inside of the duplicate array
    return the duplicate array
    
    nlogn
    [1,2,3,6]
    [3,4,5,6,7,8]
    1
    [3,4,5,6]
    [3,4,5
    [3,4
    [3]
    
    2
    [3,4,5,6]
    [3,4,5
    [3,4
    [3]
    
    create result array
    iterate through first array
      create item variable
      call the binary search helper function  
    
    binary search helper takes in a target value and an array to search
       calculate midpoint off the length of the array
       if the no array length then return;
       if target = midpoint 
          push item into result array
          return
        if the target is less than midpoint
           call binary search on midpoint and left of midpoint array
        if the target is greater than midpoint
           call binary search on midpoint and right of midpoint array
           
     
  */

 function findDuplicates(arr1, arr2) {
  
  /*
  you can do so many things in this one
  you can do n^2 double for loops
  you can do nlogn binary searches
  you can do linear hashmaps that take up storage
  or you can do pure linear  
  slide windows like below with two separate pointers,
    but it's not great if there's a million in one and not the other.

   i
  [1, 2, 3, 5, 6, 7],
  [3, 6, 7, 8, 20....million elements]
   j

      i
  [1, 2, 3, 5, 6, 7],
  [3, 6, 7, 8, 20....million elements]
   j

         i
  [1, 2, 3, 5, 6, 7],
  [3, 6, 7, 8, 20....million elements]
   j 
  O(M+N)
  */
  // let i = 0;
  // let j = 0;
  // while (i < arr1.length and j < arr2.length){
     // if both elements at indices are equal, write to result, i++, j++
    //elif value at i < value j, increment i++
    //else increment j++
    
  }
  
function findDuplicates(arr1, arr2) {
  function binarySearch(target, array) {
     if (!array.length) {
       return;
     }
     
     let midpoint = Math.floor(array.length / 2);
      console.log(target, array, midpoint)
     if (array[midpoint] === target) {
       result.push(target);
       return;
     }
     if (array[midpoint] < target) { 
       binarySearch(target, array.slice(midpoint + 1)); // 3.4.5.6
     }
     if (array[midpoint] > target) { 
       binarySearch(target, array.slice(0, midpoint)); // 3.4.5.6
     }
   }
  for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i];
    binarySearch(item, arr2.slice());
  }
   
  return result;
}

console.log(findDuplicates([1, 2, 3, 5, 6, 7],[3, 6, 7, 8, 20]));

// const findDuplicates = (arr1, arr2) => {
//   const dupes = new Set(arr1);
//   const result = [];
//   for (let item of arr2) {
//     if (dupes.has(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(findDuplicates([1,2,3,4,5,6,7], [3,6,7,8,20])) // [3,6,7]