class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addNode(val) {
        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }

        current.next = newNode;

        return this.head;
    }

    createList(arr) {

        for (let i = 0; i < arr.length; i++) {
            this.addNode(arr[i])
        }

        return this.head;
    }

    print(head) {
        if (head.next == null) {
            return head.val;
        }

        return head.val + '->' + this.print(head.next)
    }

    log() {
        console.log(this.print(this.head))
    }

    reverse() {
        let list = this.head;

        let prev = null;
        let current = list;
        let next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }

    getList() {
        return this.head;
    }
}


const linkedList2 = new LinkedList();
let head = linkedList2.createList([1, 2, 3, 4, 5, 6]);

function reverse(head) {
    let list = head;

    let prev = null;
    let current = list;
    let next = null;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

console.log(linkedList2.print(reverse(head)));


const linkedList = new LinkedList();
let list = linkedList.createList([1, 2, 3, 3, 2, 1]);
// let list = linkedList.createList([1, 2]);

function isPalindrome(head) {
    let slow = head;
    let fast = head;

    // find the middle of linked list using 
    // slow-fast/ hair-tortoise approach
    // check fast.next.next also to handle even number of nodes
    //That menas we do not move slow pointer once fast cannot be moved
    while (fast != null && fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    console.log(slow.val)

    let prev = null;
    let current = slow;
    let next = null;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    let firstHalf = head;
    let secHalf = prev;

    // console.log(linkedList.print(head))
    console.log(linkedList.print(firstHalf))
    console.log(linkedList.print(secHalf))

    while (firstHalf != null) {
        if (firstHalf.val != secHalf.val) {
            return false;
        }

        firstHalf = firstHalf.next;
        secHalf = secHalf.next;
    }

    return true;
}

console.log(isPalindrome(list));
