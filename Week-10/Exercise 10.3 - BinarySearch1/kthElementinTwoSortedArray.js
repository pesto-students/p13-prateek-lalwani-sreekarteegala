function findElement(arr1, arr2, k) {
    let m = arr1.length, n = arr2.length;
    let i = 0, j = 0, x = 0;
    let sortArr = new Array(m + n);

    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) sortArr[x++] = arr1[i++]
        else sortArr[x++] = arr2[j++]
    }

    while (i < m) { sortArr[x++] = arr1[i++] }

    while (j < n) { sortArr[x++] = arr2[j++] }
    return sortArr[k - 1];
}

var arr1 = [2, 3, 6, 7, 9];
var arr2 = [1, 4, 8, 10];
var k = 5;

// console.log(findElement(arr1, arr2, k))
console.log(findElement([2,4,6,8,10],[1,3,5,7,9,11], 5))
console.log(findElement([1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10], 7))