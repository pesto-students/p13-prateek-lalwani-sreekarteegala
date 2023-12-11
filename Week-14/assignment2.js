/**
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

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);

const l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);

console.log(l1);
console.log(l2);

// let current = l1;
// let num1 = "";

// while (current != null) {
//     console.log(current.val)
//     num1 = String(current.val) + num1
//     current = current.next;
// }

// console.log(num1, typeof num1)
// num1 = Number(num1);
// console.log(num1, typeof num1)

var addTwoNumbers = function (l1, l2) {

    let num1 = "";
    let num2 = "";
    let res;

    let curr = l1;
    while (curr != null) {
        num1 = String(curr.val) + num1
        curr = curr.next;
    }

    curr = l2;
    while (curr != null) {
        num2 = String(curr.val) + num2
        curr = curr.next;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    res = num1 + num2;

    return String(res).split("").reverse();
};

console.log(addTwoNumbers(l1, l2))