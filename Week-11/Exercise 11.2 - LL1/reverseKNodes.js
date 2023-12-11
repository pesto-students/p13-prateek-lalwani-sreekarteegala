class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class LinkedList {
    createList(arr) {
        let list = new Node(arr[0]);
        let current = list;

        for (let i = 1; i < arr.length; i++) {
            current.next = new Node(arr[i]);
            current = current.next
        }

        return list;
    }

    printList(head) {
        if (head.next == null) {
            return head.val;
        }

        return head.val + '->' + this.printList(head.next)
    }

    reverseNodes(head, k) {
        if (k == 1) {
            return head
        }

        if (head == null) {
            return null;
        }

        // Check weather the head has the required number of nodes to reverse
        let nodeCount = 0, cNode = head;
        while (cNode != null) {
            cNode = cNode.next
            nodeCount++;
        }
        if (nodeCount < k) {
            return head;
        }

        let prev = null,
            current = head,
            next = null,
            count = 0;

        while (count < k && current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }

        // head = prev;
        // head lies at first position in each iteration
        // so head.next should become the next chain link
        if (next != null && current != null) {
            head.next = this.reverseNodes(next, k);
        }

        return prev
    }

}

const list = new LinkedList();
let head = list.createList([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(list.printList(list.reverseNodes(head, 3)))
// console.log(reverseNodes(head, 3))


function createList(arr) {
    let list = new Node(arr[0]);
    let current = list;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next
    }

    return list;
}

function printList(head) {
    if (head.next == null) {
        return head.val;
    }

    return head.val + '->' + printList(head.next)
}

function reverseNodes(head, k) {
    if (k == 1) {
        return head
    }

    if (head == null) {
        return null;
    }

    let c = 0, cNode = head;
    while (cNode != null) {
        cNode = cNode.next
        c++;
    }
    if (c < k) {
        return head;
    }

    let prev = null,
        current = head,
        next = null,
        count = 0;

    while (count < k && current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }

    // head = prev;
    // head lies at first position in each iteration
    // so head.next should become the next chain link
    if (next != null && current != null) {
        head.next = reverseNodes(next, k);
    }

    return prev
}


let head2 = createList([1, 2, 3, 4, 5]);
console.log(printList(head2))
console.log(printList(reverseNodes(head2, 3)))