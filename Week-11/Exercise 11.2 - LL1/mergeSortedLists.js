class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const { LinkedList } = require('./linkedList');

const ll = new LinkedList();

function mergeSortedLists(l1, l2) {

    let i = l1;
    let j = l2;
    let newlist = null;

    if (i.val < j.val) {
        newlist = new Node(i.val);
        i = i.next;
    } else {
        newlist = new Node(j.val)
        j = j.next;
    }
    let start = newlist;

    while (i != null && j != null) {
        if (i.val < j.val) {
            newlist.next = new Node(i.val);
            newlist = newlist.next;
            i = i.next;
        } else {
            newlist.next = new Node(j.val);
            newlist = newlist.next;
            j = j.next;
        }
    }

    while (i != null) {
        newlist.next = new Node(i.val);
        newlist = newlist.next;
        i = i.next;
    }

    while (j != null) {
        newlist.next = new Node(j.val);
        newlist = newlist.next;
        j = j.next;
    }


    return start;
}

let list1 = ll.createList([1, 3, 5]);
let list2 = ll.createList([2, 4, 6]);

let list3 = ll.createList([1, 2, 4, 7, 9])
let list4 = ll.createList([3, 5, 6, 8])

// console.log(mergeSortedLists(list1, list2))
console.log(ll.printList(mergeSortedLists(list1, list2)))
console.log(ll.printList(mergeSortedLists(list3, list4)))

