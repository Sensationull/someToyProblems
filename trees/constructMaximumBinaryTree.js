// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the root node of this tree.

var constructMaximumBinaryTree = function(nums) {
    const node = new TreeNode()
    const index = maxIndex(nums)
    const numsLeft = nums.slice(0, index)
    const numsRight = nums.slice(index + 1, nums.length)
    node.val = nums[index]
    node.left = numsLeft.length ? constructMaximumBinaryTree(numsLeft) : null
    node.right = numsRight.length ? constructMaximumBinaryTree(numsRight) : null
    return node
};


/**
 * find the index of max value in array
 * @params {number[]} array
 * @return {number}
 */
var maxIndex = function(array) {
    let index = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[index]) {
            index = i
        }
    }
    return index
}