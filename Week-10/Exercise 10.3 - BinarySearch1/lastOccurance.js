function lastOccurance(arr, x) {
    let l = 0,
        r = arr.length - 1,
        res = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] == x) {
            res = mid;
            l = mid + 1;
        }

        if (arr[mid] < x)
            l = mid + 1;

        if (arr[mid] > x)
            r = mid - 1;
    }

    return res;
}

// console.log(lastOccurance([1, 2, 3, 3, 5], 3))
// console.log(lastOccurance([1, 2, 3, 4], 5))

function firstOccurance(arr, x) {
    let l = 0,
        r = arr.length - 1,
        res = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] == x) {
            res = mid
            r = mid - 1;
        }

        if (arr[mid] < x)
            l = mid + 1;

        if (arr[mid] > x)
            r = mid - 1;
    }

    return res;
}

// console.log(firstOccurance([5, 7, 7, 8, 8, 10], 8))
// console.log(lastOccurance([5, 7, 7, 8, 8, 10], 8))
// console.log(firstOccurance([1, 2, 3, 3, 5], 3))
// console.log(lastOccurance([1, 2, 3, 3, 5], 3))


function allOccurance(arr, x) {
    let leftOcc = firstOccurance(arr, x)
    let rightOcc = lastOccurance(arr, x)

    return [leftOcc, rightOcc];
}

console.log(allOccurance([5, 7, 7, 8, 8, 10], 8))
console.log(allOccurance([5, 7, 7, 8, 8, 10], 6))
