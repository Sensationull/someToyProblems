/* eslint-disable */
let test = ["9001 discuss.leetcode.com"];

const subdomainVisits = arr => {
  let obj = {};
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    let subdomain = arr[i].split(' ');
    let num = subdomain.shift();
    obj[subdomain] = obj[subdomain] + parseInt(num) || parseInt(num);
    subdomain = subdomain.join('').split('.');
    while(subdomain.length > 1) {
      subdomain.shift();
      obj[subdomain.join('.')] = obj[subdomain.join('.')] + parseInt(num) || parseInt(num);
    }
  }
  for (var key in obj) {
    let str = '';
    str += obj[key] + ' ' + key;
    result.push(str);
  }
  return result
}

console.log(subdomainVisits(test)) // ['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com' ];