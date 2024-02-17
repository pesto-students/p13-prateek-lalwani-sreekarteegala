/**
 * @param {number[]} arr
 * @return {number}
 */
function findLongestSubarray(arr) {
    // TODO: Implement your code here
    let n = arr.length
    let sum = 0;
    let maxLength = 0;
    let hash = new Map();

    for (i = 0; i < n; i++) {
        arr[i] = arr[i] === 0 ? -1 : 1;
    }

    for (i = 0; i < n; i++) {
        sum = sum + arr[i];

        if (sum == 0) {
            maxLength = i + 1
        }

        if (hash.has(sum)) {
            maxLength = Math.max(maxLength, i - hash.get(sum))
        } else {
            hash.set(sum, i)
        }

    }

    return maxLength;

}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let sum = 0;
    let maxlen = 0;
    const map = new Map();

    map.set(sum, -1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? - 1 : 1;

        if (map.has(sum)) {
            maxlen = Math.max(maxlen, i - map.get(sum))
        } else
            map.set(sum, i);
    }

    return maxlen;
};

console.log(findMaxLength([1, 1, 0, 1, 1, 0, 0]))