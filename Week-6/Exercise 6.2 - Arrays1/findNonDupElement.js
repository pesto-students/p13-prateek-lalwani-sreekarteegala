/*
Create a hash map and Iterate through the given array. Inside loop we add values to map as arrValues as index and the count in values
 initially starting from 1 and then increase the count if arr[i] is already existing in map. Finally iterate the map entries and print all 
 keys with value 1. 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
function findNonDuplicateElement(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY
    let hash = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (hash.has(arr[i])) {
            hash.set(arr[i], hash.get(arr[i]) + 1)
        } else
            hash.set(arr[i], 1)
    }

    for (const [key, value] of hash.entries()) {
        if (value === 1)
            return key;
    }
}
