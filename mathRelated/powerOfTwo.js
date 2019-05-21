const isPowerOfTwo = (n) => {
  // if n is one or two return true
  // create a recursive function that takes in a number
  // divide that number by two
  // if that number is not an int or zero,
  // return false
  // if that number is 2
  // return true
  // else
  // recurse some more
  if (n === 1 || n === 2) return true;
  function helper(num) {
    let current = num / 2;
    if (!Number.isInteger(current) || current <= 0) return false;
    if (current === 2) return true;
    return helper(current);
  }
  return helper(n)
};

console.log( '-->', isPowerOfTwo(2)); // true
console.log( '-->', isPowerOfTwo(218)); // false
console.log( '-->', isPowerOfTwo(1)); // true
console.log( '-->', isPowerOfTwo(-90)); // false
console.log( '-->', isPowerOfTwo(16)); // true
