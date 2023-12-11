/**
 * @param {number[]} arr
 * @return {number}
 */
function findNonDuplicateElement(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY
    const map = new Map();

    for (i = 0; i < arr.length; i++) {
        if (!map.get(arr[i])) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }

    for(const a of map){
        if(a[1] === 1){
            return a[0];
        }
    }
}

console.log(findNonDuplicateElement([5, 4, 3, 4, 5]));  