/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function findIntersection(arr1, arr2) {
    // PLACEHOLDER_JAVASCRIPT_FIND_INTERSECTION_BODY
    const arr = [];

    for (const idx in arr1) {
        if (arr2.includes(arr1[idx]) && !arr.includes(arr1[idx])) {
            arr.push(arr1[idx])
        }
    }

    return arr;
}

console.log(findIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))