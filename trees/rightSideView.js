/* eslint-disable */
const example = require('./exampleTree');

const { bTreeRoot1, bTreeRoot2, bTreeRoot3} = example; 

const rightSideView = (root) => {
  /*
    do bfs in an array, pop each culmination off at the end
  */
 let result = [];
  const bfs = (queue) => {
    let arr = [];
    result.push(queue[queue.length - 1].val);
    while (queue.length > 0) {
      let node = queue.shift();
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    };
    if (arr.length) bfs(arr);
  }
  bfs([root]);
  return result;
};

console.log(rightSideView(bTreeRoot2));