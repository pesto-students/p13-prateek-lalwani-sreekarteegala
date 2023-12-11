/**
 * @param {string} str
 * @return {string}
 */
function findFirstNonRepeatingCharacter(str) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        } else
            map.set(str[i], 1)
    }

    for (const [char, length] of map.entries()) {
        if (length === 1) {
            return char;
        }

        return "No non-repeating characters found";
    }
}

console.log("abccba")