/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

var defangIPaddr = function(address) {
  let temp = '';
  for (let i = 0; i < address.length; i++) {
      let char = address[i];
      if (char === '.') {
          temp += '[.]'
      } else {
          temp += char
      }
  }
  return temp;
};