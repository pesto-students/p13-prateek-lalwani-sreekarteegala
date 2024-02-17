/**
 * @param {number} number
 * @return {boolean}
 */
function isPalindrome(number) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    let reversed = 0, num = number;

    while (number !== 0) {
        const digit = number % 10; // Get the last digit of the number
        reversed = reversed * 10 + digit; // Append the digit to the reversed number
        number = Math.floor(number / 10); // Remove the last digit from the original number
    }

    return num === reversed;
}

console.log(isPalindrome(12321));
console.log(isPalindrome(12345));