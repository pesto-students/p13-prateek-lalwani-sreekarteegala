class QueueA {
    constructor() {
        this.queue = [];
    }

    enqueue(x) {
        this.queue.push(x);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    print() {
        console.log(this.queue);
    }
}

// const queue = new QueueA();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue(); // 2
// console.log(queue.peek()); // [2, 3]
// queue.print(); // [2, 3]
// queue.enqueue(4);
// queue.print(); // [2, 3, 4]

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class QueueL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(x) {
        const newNode = new Node(x);

        this.length += 1;
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = this.tail.next;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty");
        }

        let data = this.head.val;

        this.head = this.head.next;
        this.length -= 1;

        return data;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is Empty");
        }

        return this.head.val;
    }

    isEmpty() {
        return this.head == null;
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

    size() {
        return this.length;
    }
}

// const queue = new QueueA();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue(); // 2
// console.log(queue.peek()); // [2, 3]
// queue.print(); // [2, 3]
// queue.enqueue(4);
// queue.print(); // [2, 3, 4]


// Implementing stack using queue;

class Stack {
    constructor() {
        this.queue = new QueueL();
    }

    push(x) {
        this.queue.enqueue(x);
    }

    pop() {
        let q2 = new QueueL();

        while (this.queue.size() > 1) {
            q2.enqueue(this.queue.dequeue());
        }

        let data = this.queue.dequeue();

        while (q2.size() > 0){
            this.queue.enqueue(q2.dequeue());
        }

        return data;
    }

    peek(){
        this.q2 = new QueueL();

        while(this.queue.size() >1){
            this.q2.enqueue(this.queue.dequeue());
        }

        let data = this.queue.peek();

        this.q2.enqueue(this.queue.dequeue());

        while(this.q2.size()>0){
            this.queue.enqueue(this.q2.dequeue());
        }

        return data;
    }
}

// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());

exports.QueueL = QueueL;