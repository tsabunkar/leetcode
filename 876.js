// 876. Middle of the Linked List
import { Math } from "Math";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let headLength = head.length;
  let middle;
  if (headLength % 2 === 0) {
    middle = headLength / 2 + 1;
  } else {
    middle = headLength / 2 - 1;
  }
  const wholeMiddle = Math.ceil(middle * 1) * 1.0;
  return [head[wholeMiddle - 1], head[wholeMiddle], head[wholeMiddle + 1]];
};

console.log(middleNode([1, 2, 3, 4, 5]));
console.log(middleNode([1, 2, 3, 4, 5, 6]));
