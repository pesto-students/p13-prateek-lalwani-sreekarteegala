function findPartitioningIndex(arr, l, r) {
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid + 1 < arr.length && arr[mid] > arr[mid + 1]) {
            return mid;
        }

        if (arr[0] > arr[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return -1;
}

function findMinInRotatedSortedArray(arr) {
    let pi = findPartitioningIndex(arr, 0, arr.length - 1);

    return arr[pi + 1];
}

console.log(findMinInRotatedSortedArray([4, 5, 6, 7, 8, 9, 0, 1, 2]))
console.log(findMinInRotatedSortedArray([1, 2, 3, 4, 5]))
console.log(findMinInRotatedSortedArray([11, 13, 15, 17]))