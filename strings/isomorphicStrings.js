/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
*/

function isomorphicStrings(s,t) {
  let temp = '';
  let obj = {};
  if (s.length !== t.length) return undefined;
  let onlyS = new Set(s);
  let onlyT = new Set(t);
  
  if (onlyS.size !== onlyT.size) {
    return false;
  }
  
  
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!obj[char]) {
      obj[char] = s[i]
    }
  }
  
  
  
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    temp +=  obj[char];
  }
  console.log(temp, obj);
  return temp === s;
}

console.log(isomorphicStrings('egg', 'add'));
console.log(isomorphicStrings('paper', 'title'));
console.log(isomorphicStrings('egg', 'ada'));
console.log(isomorphicStrings('aa', 'ab')); //false