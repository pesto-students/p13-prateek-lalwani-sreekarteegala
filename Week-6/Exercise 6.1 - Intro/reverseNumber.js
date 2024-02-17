/**
 * @param {number} number
 * @return {number}
 */
function reverse(number) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    let reversed = 0;

    while (number !== 0) {
      const digit = number % 10; // Get the last digit of the number
      reversed = reversed * 10 + digit; // Append the digit to the reversed number
      number = Math.floor(number / 10); // Remove the last digit from the original number
    }
  
    return reversed;

}

console.log(reverse(12345));
