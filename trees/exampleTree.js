function TreeNode(val = null) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function Node(val = null) {
  this.val = val;
  this.children = null;
}

const bTreeRoot1 = new TreeNode(1);
const three = new TreeNode(3);
const two = new TreeNode(2);
const five = new TreeNode(5);

bTreeRoot1.left = three;
bTreeRoot1.right = two;
three.left = five;

const bTreeRoot2 = new TreeNode(2);
const one = new TreeNode(1);
const three2 = new TreeNode(3);
const four = new TreeNode(4);
const seven = new TreeNode(7);

bTreeRoot2.left = one;
bTreeRoot2.right = three2;
one.right = four;
three2.right = seven;

const nTree1 = new Node(1);
const nTree2 = new Node(2);
const nTree3 = new Node(3);
const nTree4 = new Node(4);
const nTree5 = new Node(5);
const nTree6 = new Node(6);

nTree1.children = [nTree3, nTree2, nTree4];
nTree3.children = [nTree5, nTree6];

const bTreeRoot3 = new TreeNode(3);
const nine = new TreeNode(9);
const twenty = new TreeNode(20);
const fifteen = new TreeNode(15);
const ninety = new TreeNode(90);

bTreeRoot3.left = nine;
bTreeRoot3.right = twenty;
twenty.left = fifteen;
twenty.right = ninety;

module.exports = {
  bTreeRoot1,
  bTreeRoot2,
  nTree1,
  bTreeRoot3,
};
