class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = null;
    }

    createList(arr) {
        this.head = new Node(arr[0]);
        this.size += 1;

        let current = this.head;

        for (let i = 1; i < arr.length; i++) {
            current.next = new Node(arr[i]);
            this.size += 1;
            current = current.next;
        }

        return this.head;
    }

    printList(head) {
        if (head.next == null) {
            return head.val;
        }

        return head.val + '->' + this.printList(head.next)
    }

    print(head){
        console.log(this.printList(head))
    }
}


// let ll = new LinkedList();
// let list = ll.createList([1, 2, 3, 4, 5]);
// // console.log(list);
// console.log(ll.printList(list));
// console.log(ll.size);

exports.LinkedList = LinkedList;