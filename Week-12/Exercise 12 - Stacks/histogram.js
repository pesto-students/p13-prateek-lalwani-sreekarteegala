const Stack = require('./sampleStack.js').Stack;

function getNSR(arr) {
    let stack = new Stack();
    let ngeMap = {};
    let nsr = [];
    /**
     * [4,  2,  6,  0,  1]
     *                      curr
     *      [0, 1]
     * nsr: [2, 0, 0, -1, -1]
     */
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            stack.push(arr[0]);
            continue;
        }

        while (stack.isEmpty() == false && arr[i] < stack.peek()) {
            ngeMap[stack.peek()] = arr[i];
            stack.pop();
        }

        stack.push(arr[i]);
    }

    while (stack.isEmpty() == false) {
        let value = stack.pop();

        ngeMap[value] = -1
    }

    for (let i = 0; i < arr.length; i++) {
        nsr[i] = ngeMap[arr[i]]
    }

    let nsrIdx = new Array(arr.length);
    for (let i = 0; i < nsr.length; i++) {
        nsrIdx[i] = arr.indexOf(nsr[i])
    }

    return { nsr, nsrIdx };
}


function getNSL(arr) {
    let stack = new Stack();
    let ngeMap = {};
    let nsl = [];
    /**
     * [4,  2,  6,  0,  1]
     *                      curr
     *      [0, 1]
     * nsr: [2, 0, 0, -1, -1]
     */
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i == arr.length - 1) {
            stack.push(arr[arr.length - 1]);
            continue;
        }

        while (stack.isEmpty() == false && arr[i] < stack.peek()) {
            ngeMap[stack.peek()] = arr[i];
            stack.pop();
        }

        stack.push(arr[i]);
    }

    while (stack.isEmpty() == false) {
        let value = stack.pop();

        ngeMap[value] = -1
    }

    for (let i = 0; i < arr.length; i++) {
        nsl[i] = ngeMap[arr[i]]
    }

    let nslIdx = new Array(arr.length);
    for (let i = 0; i < nsl.length; i++) {
        nslIdx[i] = arr.indexOf(nsl[i])
    }

    return { nsl, nslIdx };

}

function maxRectangle(arr) {
    let nsl = getNSL(arr);
    let nsr = getNSR(arr);

    // console.log(arr);
    // console.log(nsr.nsr)
    // console.log(nsr.nsrIdx)
    // console.log(nsl.nsl)
    // console.log(nsl.nslIdx)
    let maxArea = -1;

    for (let i = 0; i < arr.length; i++) {
        let height = arr[i];
        let width = (nsr.nsrIdx[i] - nsl.nslIdx[i]) - 1;

        let area = height * width;

        maxArea = Math.max(maxArea, area);

    }

    return maxArea;
}
// console.log("NSL: ",printNSL([4, 2, 6, 0, 1]))

console.log(maxRectangle([4, 2, 6, 3, 1]))
// maxRectangle([2, 1, 5, 6, 2, 3])