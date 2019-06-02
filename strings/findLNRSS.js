/* eslint-disable */
const findLongestNonRepeatingSubstring = (string) => {
  let maxStr = ''; 
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (!arr.includes(char)) {
      arr.push(char);
    } else if (arr.includes(char)) {
      arr = arr.slice(arr.indexOf(char) + 1); // arr is reassigned to the next char after the first time the current char appears 
      arr.push(char);
    }
    if (arr.length > maxStr.length) {
      maxStr = arr.join('');
    }
  }
  return maxStr
};

console.log( '-->', findLongestNonRepeatingSubstring('abracadabra')) // brac
console.log( '-->', findLongestNonRepeatingSubstring('abracadabraey')) // braey
console.log( '-->', findLongestNonRepeatingSubstring('treasonous')) // treason
console.log( '-->', findLongestNonRepeatingSubstring('pomegranate')) // pomengran
console.log( '-->', findLongestNonRepeatingSubstring('watermelon')) // waterm
console.log( '-->', findLongestNonRepeatingSubstring('abcabcbb')) // abc
console.log( '-->', findLongestNonRepeatingSubstring('pwwkew')) // wke
console.log( '-->', findLongestNonRepeatingSubstring('pppppppp')) // p


const findLongestNonRepeatingSubstringInArray = array => {
  let longestSubString = findLongestNonRepeatingSubstring(array[0]);
  array.forEach(item => {
    let substring = findLongestNonRepeatingSubstring(item);
    if (substring.length > longestSubString.length) {
      longestSubString = findLongestNonRepeatingSubstring(item);
    }
  })
  return longestSubString;
}

// console.log(findLongestNonRepeatingSubstringInArray(['watermelon', 'pomengranate']))

console.log(findLongestNonRepeatingSubstringInArray(['acai', 'blueberry', , 'bananas', 'pineapple', 'orange', 'pears', 'peaches', 'watermelon', 'grapes', 'strawberry', 'pomengranate'])) // pomengra