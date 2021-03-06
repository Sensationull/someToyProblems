/* eslint-disable */
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

// averageOfLevels(root) // [3, 14.5, 11];

/* bfs solution */

var averageOfLevels = function(root) {
  const queue=[], resArr=[];
  if(!root) return [];
  queue.push(root);
    while(queue.length>0) {
    let length=queue.length;
    let sum = 0;
      for (var i=0; i< length; i++) {
        let tempNode=queue.shift();
        if (tempNode.left !== null) queue.push(tempNode.left); 
        if (tempNode.right !== null) queue.push(tempNode.right);
        sum += tempNode.val;
      }
      resArr.push(sum/length);
    }
  return resArr;
};