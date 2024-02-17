const Stack = require('./sampleStack').Stack;


function checkBrackets(s) {
    const stack = new Stack();

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        }

        if (s[i] == ')' && stack.pop() != '(') {
            return false;
        }

        if (s[i] == '}' && stack.pop() != '{') {
            return false;
        }

        if (s[i] == ']' && stack.pop() != '[') {
            return false;
        }
    }

    if (stack.isEmpty() == true) {
        return true;
    } else
        return false;
}

console.log(checkBrackets("([){]}"));
console.log(checkBrackets("(){}"));
console.log(checkBrackets("((()))"));