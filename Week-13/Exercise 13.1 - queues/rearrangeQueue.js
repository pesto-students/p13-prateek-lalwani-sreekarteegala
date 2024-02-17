const { QueueL } = require('./queue');

function rearrangeQueue(queue) {
    let evenQ = new QueueL();
    let oddQ = new QueueL();

    for (let i = 0; i < queue.length; i++) {
        if (queue[i] % 2 === 0) {
            evenQ.enqueue(queue[i])
        } else
            oddQ.enqueue(queue[i])
    }

    let res = [];
    while(evenQ.isEmpty()==false){
        res.push(evenQ.dequeue());
    }
    while(oddQ.isEmpty()==false){
        res.push(oddQ.dequeue());
    }

    return res;
}

// Sample Input
const inputQueue = [5, 2, 8, 3, 9, 4];
const inputQueue2 = [2, 4, 6, 8, 10];

// Sample Output
console.log(rearrangeQueue(inputQueue));
console.log(rearrangeQueue(inputQueue2));
