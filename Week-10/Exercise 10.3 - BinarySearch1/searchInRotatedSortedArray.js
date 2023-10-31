/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findPartIndex(nums, l, r) {
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (mid + 1 < nums.length && nums[mid] > nums[mid + 1]) {
            return mid;
        }
        if (nums[0] > nums[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1
        }
    }

    return -1;
}

function binarySearch(nums, l, r, target) {
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] == target) {
            return mid;
        }

        if (nums[mid] > target) {
            r = mid - 1;
        }

        if (nums[mid] < target) {
            l = mid + 1;
        }
    }

    return -1;
}

var search = function (nums, target) {
    let pi = findPartIndex(nums, 0, nums.length - 1);

    if (pi == -1) {
        return binarySearch(nums, 0, nums.length - 1, target)
    }

    if (nums[0] > target) {
        return binarySearch(nums, pi + 1, nums.length - 1, target)
    } else {
        return binarySearch(nums, 0, pi, target);
    }
};


// console.log(search([0, 1, 2, 3, 4, 5, 6, 7], 6))
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))