var removeDuplicates = function(S) {
  /*
      I: a string
      O: a string
      C: none
      E: invalid string?
      
      if no string, return '';
      create a current pointer
      create a dupe pointer
      cycle through the string, while current + 1 <= string length;
      if current != dupe
          current + 1
          dupe + 1
      if current = dupe
          split string into array 
          splice array from current to dupe
          convert back into string
          current becomes 0 again
          dupe becomes one again
  */
  
  if (!S) return '';
  let current = 0;
  let duplicate = 1;
  while(current + 1 <= S.length) {
      let cur = S[current];
      let dupe = S[duplicate];
      if (cur!==dupe) {
          current++;
          duplicate++;
      }
      if (cur === dupe) {
          let str = S.split('');
          str.splice(current, 2);
          S = str.join('');
          current = 0;
          duplicate = 1;
      }
  }
  return S
};