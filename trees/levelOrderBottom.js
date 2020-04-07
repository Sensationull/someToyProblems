var levelOrderBottom = function(root) {
  /*
      I: a root
      O: a matrix
      C: none?
      E: invalid input
      
      if no root return null
      create a result matrix
      create a temp arr
      create a queue
      make a copy array to separate levels properly
      while queue length > 0
          create a node, via the shifted queue.
          push that node's value into the temp array
          if the queue's length is now zero 
              push the temp array into the results matrix
              reset the temp array
          if node left, add to queue
          if node right add to queue
      return result matrix;
  */
  
  if (!root) return [];
  let result = [];
  let temp = [];
  let queue = [root];
  let copy = []
  while(queue.length > 0) {
      let node = queue.shift();
      temp.push(node.val)
      if (node.left) copy.push(node.left)
      if (node.right) copy.push(node.right);
      if (queue.length === 0) {
          result.unshift(temp);
          temp = [];
          queue= copy
          copy = []
      }
  }
  return result
};