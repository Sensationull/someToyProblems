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
 * @return {void} Do not return anything, modify root in-place instead.
 */

 // As a stack

var flatten = function(root) {
  if (!root) return null;
  var stack = [];
  const dfs = node => {
      if (node.right) {
          stack.push(node.right);
      }
      if (node.left) {
          node.right = node.left;
          dfs(node.left)
          node.left = null
      }
      if (!node.left && stack.length) {
          node.right = stack.pop();
          dfs(node.right)
      }
  }
  dfs(root)
};

// as a not stack
/*

var flatten = function(root) {
    if (!root) return null;
    var arr = [];
    const dfs = node => {
        if (!node) return; 
        if (node) arr.push(node);
        if (node.left) dfs(node.left)
        if (node.right) dfs(node.right);
    }
    dfs(root);
    root.right = arr[1];
    root.left = null;
    arr.shift();
    for (let i = 0; i < arr.length; i++ ) {
        let node = arr[i];
        if (arr[i + 1]){ 
            node.right = arr[i + 1];
            node.left = null;
        }
    }
};
*/