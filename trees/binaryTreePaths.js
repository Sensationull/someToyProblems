/* eslint-disable */
const binaryTreePaths = (root) => {
  /*
  if no root return [];
  create an arr
  create a str
  create a helper
    if !node
      push str to arr
    add sign and node val
      if left node, call on left node
      if right node, call on right node
  call helper
  return arr
  */
  if (!root) return [];
  const arr = [];
  let str = '';
  const helper = (node, str) => {
    if (!node) {
      arr.push(str);
    }
    str += node.val + '->'
    if (node.left) {
      helper(node.left, str);
    } else if (!node.left && !node.right) {
      str = str.slice(0, str.length - 2); 
      arr.push(str)
      return;
    }   
    if (node.right) {
      helper(node.right, str); 
    } else if (!node.left && !node.right) {
      str = str.slice(0, str.length - 2); 
      arr.push(str);
      return
    }
  }
  helper(root, str);
  return arr
};