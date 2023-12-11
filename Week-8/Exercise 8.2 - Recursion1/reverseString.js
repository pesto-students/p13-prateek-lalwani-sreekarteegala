/**
 * @param {string} str
 * @return {string}
 */

function helper(str, n) {
    if (n == 0)
        return str[0];

    return str[n] + helper(str, n-1)
}

function reverseString(str) {
    // TODO: Implement your code here
    return helper(str, (str.length - 1))
}

console.log(reverseString("sreekar"))

