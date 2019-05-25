const example = require('./exampleTree');

const { nTree1 } = example;

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = (root) => {
  const arr = [];
  /*
  create an arr
  create helper
    this helper:
    takes in a node
    adds the value to the arr
    iterates through its children
      calls the helper on each of the children
  */
  const helper = (node) => {
    if (!node) return;
    arr.push(node.val);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        helper(node.children[i]);
      }
    }
  };
  helper(root);
  return arr;
};

console.log(preorder(nTree1));
console.log(nTree1);
