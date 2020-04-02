const example = require('./exampleTree');

const { nTree1 } = example;

const inorderTraversal = (root) => {
  if (!root) return []
  const result = [[root.val]];
  /*
  create a helper
  create an arr
  if it's not a valid node, return
  if it's got children push its children into the array
  if those children have children, push them into the same array
  */
  const helper = (node) => {
    const arr = [];
    if (!node) return;
    if (!node.children) return;
    for (let i = 0; i < node.children.length; i += 1) {
      arr.push(node.children[i].val);
    }
    if (arr.length) result.push(arr);
    for (let i = 0; i < node.children.length; i += 1) {
      helper(node.children[i]);
    }
  };
  helper(root);
  return result;
};

console.log(inorderTraversal(nTree1));

const inorderBST = (root) => {
  let result = [];
  
  const search = (node) => {
    if (node !== null) {
      search(node.left);
      result.push(node.val);
      search(node.right);
    }
  }

  return result;
}