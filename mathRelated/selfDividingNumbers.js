// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

var selfDividingNumbers = function(left, right) {
  /*
      I: a left bound and right bound
      O: an array
      C: none?
      E: none?
      
      create an array to return
      iterate through the bounds, from left to right inclusive
          convert the number to a string, put that string into an array
          set flag to true
          for each digit of that number
              if that converted character is not divisible by the original number
                  set flag to false
          if flag 
              push to array
  */
  
  let self = [];
  for (i = left; i <= right; i++) {
      let current = i.toString().split('');
      let flag = true
          for (let char of current) {
              if (!(i % Number(char) === 0)) {
                  flag = false;
              }
          }
      if (flag) self.push(i);
  }
  return self;
};