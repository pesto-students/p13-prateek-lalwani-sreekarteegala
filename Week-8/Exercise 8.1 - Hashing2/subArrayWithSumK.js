/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
function hasSubarrayWithSumK(arr, k) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    arr = arr.split(" ").map(Number);

    const hashMap = new Map();

    for (let i = 0; i <= arr.length; i++) {
        let key = k - arr[i];

        if (hashMap.get(key)) {
            return true;
        } else
            hashMap.set(arr[i], i);
    }

    return false;

}

// console.log(hasSubarrayWithSumK("1 2 3 4 5", 9))
/*
LeetCode problem for the same
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const map = new Map();
    let count = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     map.set(nums[i], i)
    // }

    for (let i = 0; i < nums.length; i++) {
        let key = k - nums[i];

        if (key == 0) {
            count++
        } else
            if (map.has(key)) {
                count++;
                map.set(nums[i], i)
            } else
                map.set(nums[i], i)
    }

    return count;
};

console.log(subarraySum([1, -1, 0], 0))