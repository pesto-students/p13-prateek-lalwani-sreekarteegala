function findPeak(arr) {
    let l = 0, r = arr.length - 1;

    while (l < r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (arr[mid] < arr[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid
        }
    }

    return l;
}

console.log(findPeak([1, 2, 1, 3, 5, 6, 4]))
console.log(findPeak([1, 2, 3, 1]))