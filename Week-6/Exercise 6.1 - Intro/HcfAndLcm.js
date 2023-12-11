/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function calculateHCF(a, b) {
  // PLACEHOLDER_JAVASCRIPT_CALCULATE_HCF_BODY
  for (i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0)
      //return `HCF of ${a}, ${b} is ${i}`
      return i;
  }
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function calculateLCM(a, b) {
  // PLACEHOLDER_JAVASCRIPT_CALCULATE_LCM_BODY
  let leastNum = a > b ? a : b;

  while (true) {
    if (leastNum % a === 0 && leastNum % b === 0)
      return leastNum;

    leastNum++;
  }
}

function calculateGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
}

// Example usage:
const num1 = 3;
const num2 = 2;
const gcd = calculateGCD(num1, num2);
console.log(`GCD of ${num1} and ${num2} is ${gcd}`);

