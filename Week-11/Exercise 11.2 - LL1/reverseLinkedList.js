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
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

function printList(list) {
    if (list.next == null) {
        return list.val;
    }

    return list.val + '->' + printList(list.next)
}

function reverseNodes(head){
    let prev = null;
    let currNode = head;
    let next = null;
    
    while(currNode!=null){
        next = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = next;
    }
    head = prev;

    return printList(head);

}

console.log(printList(head));
console.log(reverseNodes(head));
// console.log(reverseNodes("1 2 3 4 5 6 7 8", 3))