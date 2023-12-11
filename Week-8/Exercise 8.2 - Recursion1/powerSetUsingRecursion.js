/**
 * Generate the power set of a given array.
 *
 * @param {number[]} nums - The input array.
 * @return {number[][]} The power set of the input array.
 */
function powerSetRecursive(nums, index, subset, powerSet) {
    // TODO: Implement the recursive power set generation

    if(index == nums.length){
        powerSet.push([...subset]);
        return;
    }

    subset.push(nums[index]);
    powerSetRecursive(nums, index + 1, subset, powerSet);

    subset.pop();
    powerSetRecursive(nums, index + 1, subset, powerSet);
}

/**
 * Main function to generate the power set of a given array.
 *
 * @param {string} input - The input array elements (space-separated).
 * @return {number[][]} The power set of the input array.
 */
function powerSetMain(input) {
    // TODO: Implement the main function to generate the power set
    let nums = input.split(" ").map(Number);
    let powerSet = []
    powerSetRecursive(nums, 0, [], powerSet);

    return powerSet; 
}

console.log(powerSetMain("1 2 3"));

function powerSet(arr, len, start, end, output) {

    if (start >= len && end >= len) {
        return output;
    }

    if (end >= len) {
        return powerSet(arr, len, (start + 1), (start + 1), output)
    } else {

        let ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(arr[i])
        }

        // console.log(ans)
        output.push(ans)
        return powerSet(arr, len, start, (end + 1), output)
    }
}

function main(input) {
    let nums = input.split(" ").map(Number);
    let output = [[]]

    return powerSet(nums, nums.length, 0, 0, output)
}

// console.log(main("1 2 3"));
