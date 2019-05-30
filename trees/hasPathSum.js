/* eslint-disable */
const hasPathSum = (root, sum) => {
  let flag = false;
  let temp = 0;
  if (!root) return flag
  const findSum = (node, s) => {
    if (!node.left && !node.right) {
      s+= node.val
      if (s === sum) {
        flag = true;
      }
      return;
    } else {
      s += node.val;
      if (node.left) findSum(node.left, s)
      if (node.right) findSum(node.right, s)
    }
  }
  findSum(root, temp)
  return flag;
};