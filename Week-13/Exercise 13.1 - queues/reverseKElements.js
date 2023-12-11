const { QueueL } = require('./queue');
const queue = new QueueL();

function reverseElements(queue, k) {
    if (k == 0) {
        return;
    }

    let val = queue.dequeue();
    reverseElements(queue, k - 1);
    queue.enqueue(val);
}

function reverseKElements(q, k) {
    q.forEach(e => {
        queue.enqueue(e);
    });

    reverseElements(queue, k)

    let restEle = queue.size() - k;

    while (restEle > 0) {
        queue.enqueue(queue.dequeue());
        restEle--;
    }

    q = [];
    while (queue.isEmpty() == false) {
        q.push(queue.dequeue());
    }

    return q;
}

console.log(reverseKElements([1, 2, 3, 4, 5, 6, 7], 3));