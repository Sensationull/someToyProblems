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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  /*
    I: a binary search tree
    O: an increasing order tree
    C: no left and one right child
    E: invalid root
    
    if no root return null;
    create an array
    use dfs to put all nodes into that array
    sort that array by node values
    starting from root attach next item as node right and remove left
  */  
    
    if (!root) return [];
    const arr = [];
    const dfs = node => {
        if (!node) return;
        if (node.left) dfs(node.left)
        arr.push(node);
        if (node.right) dfs(node.right)
    }
    dfs(root)
    arr.sort((a,b) => a.val - b.val );
    root = arr[0];
    root.right = arr[1];
    root.left = null;
    for (let i = 1; i < arr.length; i++) {
        let node = arr[i];
        node.right = arr[i + 1]
        node.left = null;
    }
    return root;
};