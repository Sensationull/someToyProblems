var isHappy = function(n) {
  /*
      I: a number
      O: a boolean
      C: none
      E: none?
      
      convert the number into it's digits
          turn it into a string and split that string
      create a sum that gets updated with the square of each digit
      keep calling this function as long as that sum doesn't equal one
      if the number has occured before, we're in a loop! 
  */
  
  let arr = [n];
  let test = n
  if (n === 1) return true
  while(test !== 1) {
      let temp = 0;
      let digits = test.toString().split('');
      for (let digit of digits) {
          temp += Math.pow(parseInt(digit), 2);
      }
      if (temp === 1) return true;
      test = temp;
      if (arr.includes(temp)) return false
      arr.push(temp);
  }
};