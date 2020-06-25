/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  /*
      if no root, return empty array
      create result
      dfs helper takes in a node and the current array
      if no node, return
      put node into array
      if node left, pass node and arr
      if node right pass node and arr
      if no node right or left
      sum array
          if array sum = sum push to result array
  */
  if (!root) return [];
  let result = [];
  let temp = [];
  const search = (node, arr = []) => {
      if (!node) return;
      arr.push(node.val);
      if(!node.left && !node.right) {
          let total = arr.reduce((acc, cur) => acc + cur);
          if (total === sum) result.push(arr.slice());
          
      }
      if(node.left) search(node.left, arr);
      if(node.right) search(node.right, arr);
      arr.pop()
  }
  search(root);
  return result;
};