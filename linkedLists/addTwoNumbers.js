/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
/*
    Inputs: two linked lists
    Outputs: a linked list
    Constratints: none
    Edge cases: empty ll
    
    if l1 or l2 invalid return
    iterate through both,
    tally the individual values into a string, reverse that string
    create a new ll out of the sum of the two reversed strings
*/

if (!l1 || !l2) return null;
let values = [];
const traverse = node => {
   if (!node)  return;
    values.push(node.val)
    traverse(node.next);
}
traverse(l1);
const start = values
values = [];
traverse(l2);
const stop = values
let sum = parseInt(start.reverse().join('')) + parseInt(stop.reverse().join(''))
console.log(sum);
let temp = sum.toString().split('').reverse();
let head = new ListNode(temp.shift());
let node = head;
    while(temp.length) {
        let next = new ListNode(temp.shift());
        node.next = next;
        node = node.next;
    }
return head; 
};