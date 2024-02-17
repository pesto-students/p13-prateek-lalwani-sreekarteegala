/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let maxCount = 1;

    for (let num of nums) {
        if (set.has(num + 1)) {
            continue;
        }

        let count = 1;

        while (set.has(--num)) {
            count++;
        }

        maxCount = Math.max(maxCount, count)
    }

    console.log(maxCount)

};

// console.log(longestConsecutive([0, 4, 5, 3, 2, 1, 10, 9, 8]))
longestConsecutive([2, 4, 6, 8, 10])


/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
    // for (let i = 1; i < num; i++) {
    //     if ((i - 1) + i + (i + 1) === num) {
    //         return [i - 1, i, i + 1];
    //     }

    //     // set.add(i - 1).add(i).add(i + 1)
    // }

    if (num % 3 === 0) {
        let temp = num / 3;

        return [temp - 1, temp, temp + 1]
    }

    return [];

};

// console.log(sumOfThree(4))
// console.log(sumOfThree(33))
// console.log(sumOfThree(1543))