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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  /*
      I: a tree
      O: a number
      C: none
      E: invalid root
      
      
      create sum
      dfs
      if ! node return
      push node value to arr
      if node left call node left
      if node right call node right
      if no node left or right
          convert arr into string, then into number
          parse int number to radix 2 then add to sum
          return
      return sum
  */
  if (!root) return 0;
   let res = 0;
  let DFS = (root, S) => {
      if(!root) return;
      S += root.val;
      if(!root.left && !root.right) {
          res += parseInt(S, 2);
          return;
      }
      DFS(root.left, S);
      DFS(root.right, S);
  }
  DFS(root, '');
  return res;
};