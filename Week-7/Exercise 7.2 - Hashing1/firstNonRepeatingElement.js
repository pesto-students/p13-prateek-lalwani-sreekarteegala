/**
   * @param {string} str
   * @return {string}
   */
function firstNonRepeatingElement(str) {
    // TODO: Implement your code here

    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        let key = str[i]

        if (map.has(key)) {
            // map.set(key, map.get(key) + 1)
            let temp =  map.get(key);
            temp.push(i);

            map.set(key,temp)
        } else {
            map.set(key, [i]);
        }
    }

    for (const [key, value] of map.entries()) {
        console.log(key, value)
        if (value === 1) {
            return key;
        }
    }

    return "";

}

console.log(firstNonRepeatingElement("abbcadef"))
console.log(firstNonRepeatingElement("aabbccdd"))
console.log(firstNonRepeatingElement("abcdefg"))
console.log(firstNonRepeatingElement("aaaabbbbccccddd"))