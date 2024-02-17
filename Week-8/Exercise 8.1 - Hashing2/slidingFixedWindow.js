/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let left = 0,
        right = 0,
        sum = 0,
        maxSum = 0;

    while (right < nums.length) {
        sum += nums[right];
        if (right - left + 1 < k) {
            right++;
        }
        else if (right - left + 1 == k) {
            maxSum = Math.max(maxSum, sum);
            sum -= nums[left];
            while (nums[right] == nums[right + 1]) {
                right++;
                left++
            }
            left++;
            right++;
        }
    }
    return maxSum;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySumMap = function (nums, k) {
    let l = 0,
        sum = 0,
        maxSum = 0;
    const map = new Map();
    // [1, 5, 4, 2, 9, 9, 9];

    // sum  = 1
    // 1 -> 1, 5 -> 1, 4->1
    nums.forEach((value, r) => {
        console.log(value, map)
        sum += value;

        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1);
        }

        // if right edge of the window is exceeded or equal to size of window
        // then remove the left most sum
        // And also decrease the count of value from Map
        if (r - l >= k) {
            sum -= nums[l];
            if (map.get(nums[l]) > 1) map.set(nums[l], map.get(nums[l]) - 1)
            else map.delete(nums[l]);
            l++;
        }

        if (r - l + 1 == k) {
            if (map.size == k) {  // calculate sum only if there are three distinct numbers in map
                maxSum = Math.max(maxSum, sum);
            }
        }
    })
    return maxSum;
};

// console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3))
console.log(maximumSubarraySumMap([1, 1, 1, 7, 8, 9], 3))
console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3))
// console.log(maximumSubarraySum([4, 4, 4], 3))