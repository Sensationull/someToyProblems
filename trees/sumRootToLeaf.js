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
var sumNumbers = function(root) {
    /*
        I: root
        O: number;
        C: none
        E: invalid root
        create sum var
        create dfs helper pass node and string
    */
    let total = 0;
    let dfs = (node, path) => {
        if (!node) {
            return    
        }
        path += node.val
        if (!node.left && !node.right) {
            total += parseInt(path);
        }
        if (node.left) {
            dfs(node.left, path)
        }
        if (node.right) {
            dfs(node.right, path)
        }
    }
    dfs(root, '');
    return total
};