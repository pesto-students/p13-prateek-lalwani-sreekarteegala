const { StackList, Stack } = require('./sampleStack');


function printNGE(arr) {
    let stack = new StackList()
    let element = 0
    let next = 0

    stack.push(arr[0])
    // stack.print()
    for (let i = 1; i < arr.length; i++) {
        next = arr[i]
        if (stack.isEmpty() == false) {
            element = stack.pop()

            while (element < next) {
                // console.log(element + "-->" + next)
                if (stack.isEmpty() == true) {
                    break;
                }
                element = stack.pop()
            }

            if (element > next) {
                stack.push(element)
            }
        }

        stack.push(next)
    }

    while (stack.isEmpty() == false) {
        console.log(stack.pop() + "-->" + -1)
    }
}

function printNSR(arr) {
    // console.log(arr)

    const stack = new StackList();
    let ngeMap = {};
    const nge = [];

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            stack.push(arr[0]);
            continue;
        }

        while (stack.isEmpty() == false && stack.peek() > arr[i]) {
            // console.log(stack.peek() + '->' + arr[i]);
            ngeMap[stack.peek()] = arr[i];
            stack.pop();
        }

        stack.push(arr[i]);
    }

    while (stack.isEmpty() == false) {
        let value = stack.pop();

        ngeMap[value] = -1;
    }

    for (let i = 0; i < arr.length; i++) {
        nge[i] = ngeMap[arr[i]]
    }

    return nge;
}


function printNGR(arr) {
    const stack = new StackList();
    let ngeMap = {};
    const nge = [];

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            stack.push(arr[0]);
            continue;
        }
// [5, 3, 8, 4, 2, 7, 1]
/*
8 4 2 

3=>[8]
5->[8]
2
*/
        while (stack.isEmpty() == false && stack.peek() < arr[i]) {
            // console.log(stack.peek() + '->' + arr[i]);
            if (ngeMap[stack.peek()]) {
                ngeMap[stack.peek()].push(arr[i])
            } else ngeMap[stack.peek()] = [arr[i]];
            stack.pop();
        }

        stack.push(arr[i]);
    }

    while (stack.isEmpty() == false) {
        let value = stack.pop();

        if (ngeMap[value]) {
            ngeMap[value].push(-1)
        } else ngeMap[value] = [-1];

        // ngeMap[value] = -1;
    }
    console.log(ngeMap)
    for (let i = 0; i < arr.length; i++) {
        let val = ngeMap[arr[i]].shift();

        nge[i] = val;
    }

    return nge;
}

function printNGL(arr) {
    let stack = new Stack();
    let n = arr.length;
    let ngeMap = {};
    const ngl = [];

    for (let i = n - 1; i >= 0; i--) {
        if (i == n - 1) {
            stack.push(arr[n - 1]);
            continue;
        }

        while (stack.isEmpty() == false && stack.peek() < arr[i]) {
            // console.log(stack.peek() + '->' + arr[i]);
            ngeMap[stack.peek()] = arr[i];
            stack.pop();
        }

        stack.push(arr[i]);
    }

    while (stack.isEmpty() == false) {
        let value = stack.pop();

        ngeMap[value] = -1;
    }

    for (let i = 0; i < arr.length; i++) {
        ngl[i] = ngeMap[arr[i]]
    }

    return ngl;
}

function printNSL(arr) {
    let stack = new Stack();
    let n = arr.length;
    let ngeMap = {};
    const nsl = [];

    for (let i = n - 1; i >= 0; i--) {
        if (i == n - 1) {
            stack.push(arr[n - 1]);
            continue;
        }

        while (stack.isEmpty() == false && stack.peek() > arr[i]) {
            // console.log(stack.peek() + '->' + arr[i]);
            ngeMap[stack.peek()] = arr[i];
            stack.pop();
        }

        stack.push(arr[i]);
    }

    while (stack.isEmpty() == false) {
        let value = stack.pop();

        ngeMap[value] = -1;
    }

    for (let i = 0; i < arr.length; i++) {
        nsl[i] = ngeMap[arr[i]]
    }

    return nsl;
}


// printNGE([4, 2, 6, 0, 1])
// printNGL([4, 2, 6, 0, 1])
// console.log("arr: ", [5, 3, 8, 4, 2, 7, 1]);
// console.log("NGR: ", printNGR([4, 2, 6, 2, 0, 1]))
// console.log("NSR: ",printNSR([4, 2, 6, 0, 1]))
// console.log("NGL: ",printNGL([4, 2, 6, 0, 1]))
// console.log("NSL: ",printNSL([4, 2, 6, 0, 1]))
console.log(printNGR([5, 3, 8, 4, 2, 7, 3, 1]))

