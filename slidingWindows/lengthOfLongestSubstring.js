// Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
  //create an empty string for your substring
  let maxStr = '';
  // create an empty array to keep track of your chars you already have
  let arr = [];
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // simplification of current char
    let char = s[i]
    // if it's not in there
    if (!arr.includes(char)) {
      //put it into the array
      arr.push(char);
    //if it is
    } else if (arr.includes(char)) {
      // check if the chars stored in the array are greater than the substring tracker
      if (arr.length > maxStr.length) {
        // if they are, make the array the new max substring
        maxStr = arr.join('');
      }
      // the new array will start from the next index of the new substring
      arr = arr.slice(arr.indexOf(char) + 1);
      // add that substring to the list of the chars stored
      arr.push(char);
    }
    // if we make it to the end of the array and all of them are unique, then we need to just see if the length is longer than whatever we stored last
    if (i === s.length - 1) {
      if (arr.length > maxStr.length) {
        maxStr = arr.join('');
      }
    }
  }
  // return the length;
return maxStr.length
};

/**
 * This function is really finding the actual substring too, so if you need just the substring, return that, rather than the length;
 */