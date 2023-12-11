function reverseQueue(q) {
    let stack = [];

    while (q.length > 0) {
        stack.push(q[0]);
        q.shift();
    }

    while (stack.length > 0) {
        q.push(stack[stack.length - 1]);
        stack.pop();
    }

    return q;
}

console.log(reverseQueue([1, 2, 3, 4, 5]))