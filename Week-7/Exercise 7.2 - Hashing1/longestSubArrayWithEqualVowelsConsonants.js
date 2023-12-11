/**
   * @param {string} chars
   * @return {number}
   */
function longestSubarrayWithEqualVowelsAndConsonants(chars) {
    // TODO: Implement your code here

    let sum = 0;
    let maxlen = 0;
    const map = new Map();


    chars = chars.toLowerCase()
    map.set(sum, -1);
    for (let i = 0; i < chars.length; i++) {
        sum += /(a|e|i|o|u)/.test(chars[i]) ? -1 : 1;

        if (map.has(sum))
            maxlen = Math.max(maxlen, i - map.get(sum))
        else
            map.set(sum, i)
    }

    return maxlen;
}


console.log(longestSubarrayWithEqualVowelsAndConsonants("geeksforgeeks"));
console.log(longestSubarrayWithEqualVowelsAndConsonants("aeiouAEIOU"));
