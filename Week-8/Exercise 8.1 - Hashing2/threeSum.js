/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let calculateSum = (nums, i, output) => {
    let l = i + 1,
        r = nums.length - 1;

    while (l < r) {
        let sum = nums[i] + nums[l] + nums[r];

        if (sum < 0) l++;
        else if (sum > 0) r--;
        else {
            output.push([nums[i], nums[l], nums[r]]);
            while (nums[l] == nums[l + 1]) l++;
            while (nums[r] == nums[r - 1]) r--;
            l++;
            r--;
        }
    }

    return output;
}
var threeSum = function (nums) {
    const output = [];
    nums.sort((a, b) => a - b)


    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] > nums[i - 1]) {
            calculateSum(nums, i, output)
        }
    }

    return output;

};

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))