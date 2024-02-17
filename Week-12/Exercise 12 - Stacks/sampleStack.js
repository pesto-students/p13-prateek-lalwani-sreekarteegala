class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.stack.length == 0) {
            throw new Error("Stack is empty");
        }

        return this.stack.pop();
    }

    peek() {
        if (this.stack.length == 0) {
            throw new Error("Stack is empty");
        }

        return this.stack[this.stack.length - 1];
    }

    print() {
        console.log(this.stack);
    }

    isEmpty() {
        return this.stack.length == 0;
    }
}

// const stack = new Stack();


// stack.print();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.peek());
// stack.pop(3);
// stack.print();
// console.log(stack.peek());

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class StackList {
    constructor() {
        this.head = null;
    }

    push(element) {
        let newNode = new Node(element);

        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        if (this.head == null) {
            throw new Error("Stack is Empty");
        }

        let value = this.head.val;

        this.head = this.head.next;

        return value;
    }

    peek() {
        return this.head.val;
    }

    print() {
        let curr = this.head;
        let list = "";

        while (curr != null) {
            list = list + curr.val + (curr.next != null ? '->' : "")
            curr = curr.next;
        }

        console.log(list);
    }

    isEmpty() {
        return this.head == null;
    }
}

exports.Stack = Stack;
exports.StackList = StackList;