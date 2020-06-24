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
var deepestLeavesSum = function(root) {
  /*
      I: a root
      O: a number;
      C: none;
      E: invalid root
      
      if no root return 0
      make temp sum
      make current level array
      make next level array
      bfs through
      add sum to temp sum
      every time current level length is zero reset to next level
      if no next level don't reset, just return;        
  */
  if (!root) return 0;
  let sum = 0;
  let current = [root];
  let next = [];
  while (current.length) {
      let node = current.shift();
      sum += node.val;
      if (node.left) next.push(node.left)
      if (node.right) next.push(node.right)
      if (!current.length && next.length) {
          sum = 0;
          current = next;
          next = [];
      }
  }
  return sum;
}