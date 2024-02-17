class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

var printList = (head) => {
    if (head.next == null) {
        return head.val;
    }

    return head.val + '->' + printList(head.next)
}

var reverseKGroup = function (head, k) {
    if (!head || k === 1) {
        return head;
    }

    let count = 0;
    let current = head;
    while (current && count < k) {
        current = current.next;
        count++;
    }

    if (count < k) {
        return head;
    }

    let prev = null;
    let next = null;
    current = head;
    for (let i = 0; i < k; i++) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head.next = reverseKGroup(current, k);

    return prev;
};

// let reversedList = reverseKGroup(head, 2);
console.log(printList(reverseKGroup(head, 3)))

let rL = reverseKGroup(head, 3)
console.log(rL.val);
console.log(rL.next.val);
console.log(rL.next.next.val);
// console.log(rL.next.next.next.val);
// console.log(rL.next.next.next.next.val);