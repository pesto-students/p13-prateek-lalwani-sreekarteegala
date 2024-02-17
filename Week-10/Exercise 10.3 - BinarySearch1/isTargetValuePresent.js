function binarySearch(arr, x) {
    let l = 0, r = arr.length - 1;


    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] == x) {
            return true;
        }

        if (arr[mid] < x)
            l = mid + 1;

        if (arr[mid] > x)
            r = mid - 1;
    }

    return false;
}

// console.log(binarySearch([1, 3, 5, 7, 9], 5));
// console.log(binarySearch([1, 2, 3, 4, 5], 3));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


function getFirstPosition(arr, l, r, x) {
    let res = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] == x) {
            res = mid;
            r = mid - 1;
        }

        if (arr[mid] > x) {
            r = mid - 1;
        }
        if (arr[mid] < x) {
            l = mid + 1;
        }
    }

    return res;
}

function getLastPosition(arr, l, r, x) {
    let res = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] == x) {
            res = mid;
            l = mid + 1;
        }

        if (arr[mid] > x) {
            r = mid - 1;
        }
        if (arr[mid] < x) {
            l = mid + 1;
        }
    }

    return res
}

var targetIndices = function (nums, target) {
    nums = nums.sort((a, b) => a - b);

    let firstPosition = getFirstPosition(nums, 0, nums.length - 1, target)
    let lastPosition = getLastPosition(nums, 0, nums.length - 1, target);
    let res = [];

    if (firstPosition == -1 && lastPosition == -1)
        return [];

    if (firstPosition == lastPosition) {
        return [firstPosition];
    }

    while (firstPosition <= lastPosition) {
        res.push(firstPosition);
        firstPosition++;
    }

    return res;
};

console.log(targetIndices([1, 2, 3, 5, 2, 3], 3))
console.log(targetIndices([1, 2, 3, 5, 2, 3], 2))
console.log(targetIndices([1, 2, 5, 2, 3], 4))