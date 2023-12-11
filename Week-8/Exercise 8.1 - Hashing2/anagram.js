/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function getKey(str) {
    return str.split("").sort().join("");
}

function groupAnagrams(strs) {
    let n = strs.length;
    let anagramMap = new Map();
    let output = new Array();

    for (let i = 0; i < n; i++) {
        let key = getKey(strs[i]);

        if (anagramMap.has(key)) {
            let a = anagramMap.get(key);

            a.push(strs[i]);
            anagramMap.set(key, a);
        } else {
            anagramMap.set(key, [strs[i]])
        }
    }

    for (let [key, value] of anagramMap.entries()) {
        // console.log(key, value);
        output.push(value);
    }

    return output;
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));



console.log(reverseString("sreekar"))