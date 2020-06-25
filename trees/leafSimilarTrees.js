var leafSimilar = function(root1, root2) {
  /*
    I: two trees
    O: a boolean
    C: none
    E: invalid roots
    
    if no root return false;
        use dfs
        if left, call on left
        if right call on right
        if no right or left
        add to an array
    do it on the other tree
    if the arrays are equal, return true;
  */  
    if (!root1 || !root2) return false;
    let one = [];
    let two = [];
    const first = node => {
        if (!node) return;
        if (node.left) first(node.left)
        if (node.right) first(node.right);
        if (!node.left && !node.right) one.push(node.val)
    }
    first(root1);
    two = one;
    one = [];
    first(root2);
    return '' + one === '' + two;
};