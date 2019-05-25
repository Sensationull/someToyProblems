const example = require('./exampleTree');

const { nTree1 } = example;

const postorderTraversal = (root) => {
  /*
  create result arr;
  create helper
  iterate through current node's children
  if no children,
    push current node
    then return
  if children
    call helper on each child;
  */
  const result = [];
  const helper = (node) => {
    if (!node) return;
    if (!node.children) {
      result.push(node.val);
      return;
    }
    if (node.children) {
      for (let i = 0; i < node.children.length; i += 1) {
        helper(node.children[i]);
      }
      result.push(node.val);
    }
  };
  helper(root);
  return result;
};

console.log('-->', postorderTraversal(nTree1));
