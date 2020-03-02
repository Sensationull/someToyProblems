const example = require('./exampleTree');

const { bTreeRoot1, bTreeRoot2, bTreeRoot3 } = example;

const breadthFirstSearch = (root) => {
  const result = [];
  const bfs = (queue) => {
    const arr = [];
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.val);
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
    if (arr.length) bfs(arr);
  };
  bfs([root]);
  return result;
};

console.log(breadthFirstSearch(bTreeRoot1)); // [1,3,2,5]
console.log(breadthFirstSearch(bTreeRoot2)); // [2,1,3,4,7]
console.log(breadthFirstSearch(bTreeRoot3)); // [3,9,20,15,90]


// const sum = (x) => {
//   const sumIt = y => x + y;
//   return sumIt;
// };

// const sumA = sum(4);
// const sumB = sumA(3);

// console.log(sumA, sumB);
