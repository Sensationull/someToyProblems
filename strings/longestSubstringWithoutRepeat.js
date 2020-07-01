/**
 * 
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  /*
      I: a string
      O: a number
      C: none
      E: invalid string, string of 1 length
      
      create a result 
      if there is no string return 0
      if the string's length is 1 return 1
      create a start
      create a current
      create a stop
      iterate through the string
          if the character is not in the start
              place it in the start
              result = result.length > start.length?
          if the character is in the start
              find the first index of the character, slice start from that index plus one through the end, that's your new start
              add the current char to the start
          compare lengths
      return the result 
  */
  let result = 0;
  if (!s.length || s === '') {
      return 0;
  }
  if (s.length === 1) {
      return 1;
  }
  let start = ''
  for (let i = 0; i < s.length; i++) {
      let current = s[i];
      if (!start.includes(current)) {
          start += current; 
      } else {
          let copyIndex = start.indexOf(current);
          start = start.slice(copyIndex + 1);
          start += current;
      }
      result = result > start.length ? result : start.length;
  }
  return result
};