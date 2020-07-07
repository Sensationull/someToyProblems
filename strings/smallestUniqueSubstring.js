/*
  Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

  Come up with an asymptotically optimal solution and analyze the time and space complexities.

  Example:

  input:  arr = ['x','y','z'], str = "xyyzyzyx"

  output: "zyx"


  I: an array and a string
  O: the smallest substring
  C: none?
  E: invalid inputs

  arr = ['x','y','z'], str = "xyyzyzyx" => "zyx"
  arr = ['a','b'], str = "xyyzyzyx" => ""
  arr = ['a','b'], str = "abba" => "ab"
  arr = ['c','d'], str = "pewpewcod" => "cod"
  arr = ['c','d','e'], str = "pewpewcod" => "ewcod"

  if the array or string is empty return empty string
    each character needs to be evaluated to see if it exists in the array
  if it doesn't skip it
  if it does 
    ask the same question of the next character and the next...until you either find every single character or reach the end of the string

  recursive helper
    if this string or array is empty
      if temp shorter then shortest, it becomes shortest
      return 
    if this item is included in the array
      remove that item from the array
      add that char to the temp
      call this function on the next item in the string
    if this item is not in the array
      add this item to the temp
      call this item on the next item in the string
*/

function getShortestUniqueSubstring(array, string) {
  if (!array.length || !string.length) {
    return "";
  }
  let shortest = string.length;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (array.includes(char)) {
      // console.log(string.slice(i), i);
      substringSearch(string.slice(i),array, '');
    }
  }

  function substringSearch(string, array, temp) {
    if (!string.length && array.length) {
      return;
    } else if (!array.length) {
      shortest = shortest.length < temp.length ? shortest : temp;
      return;
    } 
    
    let char = string[0]
    if (array.includes(char)) {
      array = array.filter(items => items !== char);
      temp += string[0];
      substringSearch(string.slice(1), array, temp);
    } else {
      temp += string[0];
      substringSearch(string.slice(1), array, temp);
    }
  }

  return shortest;
}

console.log(getShortestUniqueSubstring(['x','y','z'], 'xyyzyzyx')) // zyx
console.log(getShortestUniqueSubstring(['c','d','e'],"pewpewcod") ) //"ewcod"