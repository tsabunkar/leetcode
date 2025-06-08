// 876. Middle of the Linked List
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
/* 
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
 */

// Considering its not array but linked list, so cannot use any of the Array inbuilt methods

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function buildLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return head.next; // head of the actual list
}

const linkedList1 = buildLinkedList([1, 2, 3, 4, 5, 6]);
// console.log(linkedList1);

var middleNode = function (head) {
  let headlength = 0;
  let current = head;

  // find out the length of the linked list
  while (current) {
    console.log(current.val);
    headlength = headlength + 1;
    current = current.next;
  }
  console.log("headlength is ", headlength);

  // find out the middle node of the linked list
  let middle;
  if (headlength % 2 === 0) {
    middle = headlength / 2 + 1;
  } else {
    middle = headlength / 2;
  }
  console.log(middle);
  const wholeMiddle = Math.ceil(middle * 1) * 1.0;
  console.log("wholeMiddle length is ", wholeMiddle);

  // return the singlylinkedlist from the middlenode

  let singlylinkedlistFromMiddlenode = new ListNode(0);
};

console.log(middleNode(linkedList1));
// console.log(middleNode([1, 2, 3, 4, 5, 6]));
