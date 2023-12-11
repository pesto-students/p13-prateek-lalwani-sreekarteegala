/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    // Your JavaScript function body for fourSum goes here
    nums = nums.sort((a, b) => a - b)
    const finalOutput = [];

    for (let i = 0; i <= nums.length - 3; i++) {
        for (let j = i + 1; j <= nums.length - 2; j++) {
            let l = j + 1,
                r = nums.length - 1;

            while (l < r) {
                let fourSum = nums[i] + nums[j] + nums[l] + nums[r];

                if (fourSum < target) l++;
                else if (fourSum > target) r--;
                else {
                    finalOutput.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (nums[l] == nums[l + 1]) l++;
                    while (nums[r] == nums[r - 1]) r--;
                    l++;
                    r--;
                }
            }

            while (nums[j] == nums[j + 1]) j++
        }
        while (nums[i] == nums[i + 1]) i++
    }

    return finalOutput;
}


console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([2, 2, 2, 2], 8))