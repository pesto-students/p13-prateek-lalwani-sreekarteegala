/**
 * @param {number[]} array
 * @return {boolean}
 */
function checkDuplicates(array) {
    /* Your JavaScript function body for checking duplicates goes here */
    let map = new Map();

    for (let i = 0; i < array.length; i++) {

        if (map.has(array[i])) {
            return "There are duplicate elements in the array."
        } else {
            map.set(array[i], i);
        }

        if (i == array.length - 1) {
            return "There are no duplicate elements in the array."
        }
    }
}
