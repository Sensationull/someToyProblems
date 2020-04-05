/*
  Given a string, write a function that determines wheter or not the string is a number. You may not use Javasript's built in parseInt method.

  Ex:
    I: "123"
    O: true

    I: "-2.9"
    O: false

    I: "00000000"
    O: false

    I: string
    O: a boolean
    C: no parseInt
    E: multiple zeroes

    "-1.2" decimals and negatives
    "1234a" non numeric characters
    "123" numeric chars
    
    create a decimal flag

    if the number is negative you're going to start at 1 rather than zero
      you're going to need to iterate through the entire string
    if this is the first time you're seeing a decimal, set the decimal flag to true
    if the number is Nan, return false || this is the second time you've seen a decimal return false

*/

const isNumber = (input) => {
  let sign = 0;
  let decimal = false;
  let characters = input.split('')
  if (characters[0] === '-') sign = 1;
  for (let i = sign; i < characters.length; sign++) {
    let char = characters[i];
    if (char === '.') {
      decimal = true;
    } else if (Number.isNaN(Number(char)) || decimal) {
      return false;
    }
  }
  return true;
}


console.log(isNumber('-1234')) // true
console.log(isNumber('-1.234')) // true
console.log(isNumber('-1.2.34')) // false
console.log(isNumber('123abc')) // false
console.log(isNumber('000000')) // false