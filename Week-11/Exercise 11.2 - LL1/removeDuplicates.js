class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;

            return this.head;
        }

        let currNode = this.head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        currNode.next = newNode;

        return this.head;
    }

    printList() {
        let currNode = this.head;

        let list = (data) => {

            if (data.next == null) {
                return data.value;
            }

            return data.value + '->' + list(data.next)
        }

        console.log(list(currNode));
        return; // list(currNode);
    }

    removeDuplicates() {
        let set = new Set();
        let currNode = this.head;

        while (currNode.next != null) {
            let nextNode = currNode.next;

            if (set.has(nextNode.value)) {
                currNode.next = nextNode.next;
            } else {
                set.add(currNode.value);
                currNode = currNode.next;
            }
        }

        return;
    }
};

function removeDup(list) {
    list = list.split(" ");

    const linkedList = new LinkedList();

    for (let val of list) {
        linkedList.addNode(val)
    }

    linkedList.printList();
    linkedList.removeDuplicates();
    linkedList.printList();
}

removeDup("1 2 3 2 4 1")
