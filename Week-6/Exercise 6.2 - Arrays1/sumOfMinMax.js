/**
 * @param {number[]} arr
 * @return {number}
 */
function findSumOfMaxAndMin(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_SUM_OF_MAX_AND_MIN_BODY
    let min = arr[0];
    let max = arr[0];

    for (i = 0; i < arr.length; i++) {
        min = min < arr[i] ? min : arr[i];
        max = max > arr[i] ? max : arr[i];
    }

    return min + max;
}

console.log(findSumOfMaxAndMin([5, 2, 9, 1, 7]))
