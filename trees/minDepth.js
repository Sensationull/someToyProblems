/* eslint-disable */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let three = new TreeNode(3);
let nine = new TreeNode(9);
let twenty = new TreeNode(20);
let fifteen = new TreeNode(15);
let seven = new TreeNode(7);

three.left = nine;
three.right = twenty;
twenty.left = seven;
twenty.right = fifteen;

const minDepth = root => {
  let count = 0;
  let arr = [];
  let smallest = 0;
  let flag = true
    const helper = (node, count) => {
      if (node && flag) {
        count++
        arr.push(count);
        flag = false
      } else {
        return
      }
      if (node.left) {
        helper(node.left, count)
      }
      if (node.right) {
        helper(node.right, count)
      }
    }
  helper(root, count);
  if (arr.length > 0) {
    smallest = arr[0];  
    for (var i = 0; i < arr.length; i++) {
      smallest = arr[i] < smallest ? arr[i] : smallest
    }
  }
  return smallest
}

console.log(minDepth(three));