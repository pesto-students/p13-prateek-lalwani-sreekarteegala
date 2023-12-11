const { Stack } = require('./sampleStack.js');

function RPN(str) {
    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        if (/^([0-9])$/.test(str[i])) {
            stack.push(Number(str[i]))
        }
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            let res;
            if (str[i] == '+') {
                res = val1 + val2;
            } else if (str[i] == '-') {
                res = val1 - val2;
            } else if (str[i] == '*') {
                res = val1 * val2;
            } else if (str[i] == '/') {
                res = val1 / val2;
            }

            stack.push(res);
        }
    }

    return stack.peek()
}

// RPN('234*+')
console.log(RPN('12+345*+*'))