function findArrayQuadruplet(arr, s) {
  /*
    Input: an array and a number
    Outputs: an array of empty if no quad, an array of four
    Constraints: none
    Edge Case: none
    
    sort array
    iterate through the sorted array
    four for loops 
      each one has a current index that it starts at
        once you reach the innermost one
          see if each of them is equal to s
          
     [0,1,2,3,4,5,7,9]
      |
        | 
          |
            |
            s = 6 !== 20
     [0,1,2,3,4,5,7,9]
      |
        | 
              |
              |
            s = 7 !== 20
    nums[i] + 
      num[j] + 
        num[left] + num[right]
        
  */
  
  let result = [];
  let target = s;
  arr.sort((a,b) => a - b)
  for (let i = 0; i < arr.length - 3; i++){
    let first = arr[i]
      for (let j = 1; j < arr.length - 2; j++){
        let second = arr[j]
          let k = 2
          let l = arr.length - 1;

          while (k < l) {
            let sum = first + second + arr[l] + arr[k];
            if (target - sum === 0) {
            console.log('third and fourth in loop', arr[k], arr[l])
              result.push(first,second, arr[k], arr[l]);
              return result
            } else if (target - sum < 0) {
              l--;

            } else if (target - sum > 0) {
              k++;
            }

          }
      }
  }
  return result;
}

console.log(findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20));
cosnole.log(findArrayQuadruplet([1,2,3,4,5,9,19,12,12,19], 40)); // [4,5,12,19]