

/*
    write a function that will recieve an array (n + 1)  elements. Each element is an integer from 1 to n. Return an integer that is a duplicate. 
    
    I: an array
    O: a number
    C: none
    E: invalid input (empty array/no dupes)
    
    // [1,2,3,3,3,4,5] return 3
    // [2,3,4,5,6,7,2] return 2
    // [8,8,8,8,9,9,9,9] return 8 or 9
    
    if no array length return -1
    
    create a map variable
    iterate through the array
        if the item exists in the map
            return that item
        if it doesnt
            put that item into the map
    return - 1
*/

/*
    ['bread', 'array', 'cereal', 'tom', 'boop' 'bread'];
    ['array', 'bread', 'bread', 'boop', 'cereal', 'tom'];
    bread ['array', 'bread', 'boop' ,'cereal', 'tom', ];
    
    iterate through the array
        make each item the target
        create a new array without the target inside of it
        pass that array into the helper
    
    create a helper function the array, the target string
       return treu
        
    
*/



function findDuplicates (array) {
  if (!array.length) {
      return -1;
  }
  let map = {};
  for (let i = 0; i < array.length; i++ ) {
      let current = array[i];
      if (map[current]) {
          return current;
      } else {
          map[current] = 1;
      }
  }
  return -1;
}

(function main() {
  console.log(findDuplicates([1,2,3,3,3,4,5])) // 3
  console.log(findDuplicates([2,3,4,5,6,7,2]))
  console.log(findDuplicates([]))
  console.log(findDuplicates([1,2,3]))
  console.log(findDuplicates([8,8,8,8,9,9,9,9]))
}());