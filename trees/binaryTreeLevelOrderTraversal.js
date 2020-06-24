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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  /*
      I: tree
      O: a matrix
      C: level order
      E: invalid root
      
      bfs:
      make a queue with the root inside
      make a temp
      make a result
      while queue has a length
      if node left add to queue
      if node right add to queue
      queue shift
      if queue is zero
          make temp queue
          push temp to result
          reset temp to empty
  */
  if (!root) return [];
  let queue = [root];
  let temp = [];
  let real = [];
  let result = [[root.val]];
  while (queue.length) {
      let node = queue.shift();
      if (node.left) {
        temp.push(node.left.val);
        real.push(node.left)  
      } 
      if (node.right) {
        temp.push(node.right.val);
        real.push(node.right)  
      } 
      if (!queue.length && temp.length) {
          result.push(temp);
          queue = real;
          temp = [];
          real = [];
      }
  }
  return result;
};