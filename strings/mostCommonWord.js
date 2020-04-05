/* eslint-disable */

var mostCommonWord = function(paragraph, banned) {
  // strip the paragraph of it's puncuation
  // create a wordmap of the paragraph
  // find the largest number associated with a non-banned word.
let regex =/[^\w\s]|_/g // this is the regex that will remove everything except alphanumeric characters and whitespace, then collapses multiple adjacent characters to single spaces.
let str = paragraph.replace(regex," ").toLowerCase();
let obj = {}
let split = str.split(' ');
  split.forEach(item => {
    obj[item] = obj[item]+ 1 || 1;
  });
  for (var key in obj) {
    if (banned.includes(key)) {
      delete obj[key];
    }
  }
let largest = 0;
let largestKey = ''
  for (var key in obj) {
    if (obj[key] > largest && key !== '') {
      largest = obj[key]
      largestKey = key
    }
  }
  return largestKey
};

console.log(mostCommonWord("abc abc? abcd the jeff!", ["abc","abcd","jeff"]));
console.log(mostCommonWord("Bob. hIt, baLl", ['hit', 'bob']))
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ['a']))
