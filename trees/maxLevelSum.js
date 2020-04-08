// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level X such that the sum of all the values of nodes at level X is maximal.

var maxLevelSum = function(root) {
  /*
      I: a tree
      O: a number 
      C: none
      E: none?
      
      if no root, return null?
      bfs
      create a queue
      create a copy
      create a max sum
      create a max level
      create a level, starting at 1
      
      iterate through the tree
          create a node
          add to temp sum
          if left push to copy
          if right push to copy
          if queue.length is zero
              if temp sum > max sum, 
                  max sum = temp sum
                  max level = level
              temp sum = 0;
              queue = copy
              level++
  */
  if (!root) return null;
  let queue = [root];
  let copy = [];
  let temp = 0;
  let max = 0;
  let level = 1;
  let maxLevel = 1;
      while(queue.length > 0) {
          let node = queue.shift();
          temp += node.val;
          if(node.left) copy.push(node.left)
          if(node.right) copy.push(node.right)
          if (queue.length === 0) {
              if (temp > max) {
                  max = temp
                  maxLevel = level
              }
              temp = 0;
              queue = copy;
              copy = [];
              level++;
          }
      }    
  return maxLevel;
};