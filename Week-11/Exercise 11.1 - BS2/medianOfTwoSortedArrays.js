/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (arr1, arr2) {
    let i = 0, j = 0, x = 0, m = arr1.length, n = arr2.length;
    let merArr = new Array(m + n);

    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            merArr[x++] = arr1[i++]
        } else {
            merArr[x++] = arr2[j++]
        }
    }

    while (i < m) { merArr[x++] = arr1[i++] }
    while (j < n) { merArr[x++] = arr2[j++] }

    let mid = Math.floor((0 + merArr.length - 1) / 2);
    let result = -1;

    if ((m + n) % 2 == 0) {
        result = (merArr[mid] + merArr[mid + 1]) / 2;
    } else {
        result = merArr[mid];
    }

    return result;
};


let arr1 = [1, 3, 4], arr2 = [2]

console.log(findMedianSortedArrays(arr1, arr2));