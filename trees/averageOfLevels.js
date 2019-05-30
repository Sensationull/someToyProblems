/* eslint-disable */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(3);
let nine = new TreeNode(9);
let twenty = new TreeNode(20);
let fifteen = new TreeNode(15);
let seven = new TreeNode(7);

root.left = nine;
root.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

/* dfs solution 
  helperFunction -> calculates the average 
  create obj that keeps track of level -> {1: [1], 2: [2, 3], 3: [6, 6, 6, 6]}
*/



var averageOfLevels = function(tree) {
  if (!tree) return [];
  let obj = {};
  let result = [];
  const dfs = (node,level) => {
    if (!node) return;
    if (!obj[level]) {
      obj[level] = [node.val];
    } else {
      obj[level].push(node.val);
    }
    level++;
    if (node.left) dfs(node.left, level);
    if (node.right) dfs(node.right, level);
  };
  dfs(tree, 1);
  for (let key in obj) {
    let sum = obj[key].reduce((a,b) => a + b)
    result.push(sum / obj[key].length); 
  }
  return result;
};

averageOfLevels(root) // [3, 14.5, 11];