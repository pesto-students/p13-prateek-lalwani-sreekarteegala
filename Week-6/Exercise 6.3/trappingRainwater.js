/**
 * @param {number[]} arr
 * @return {number}
 */
// function trapRainWater(heights) {
//     // PLACEHOLDER_JAVASCRIPT_TRAP_RAIN_WATER_BODY
//     let n = heights.length;
//     let maxLeftArr = [];
//     let maxRightArr = [];
//     let waterTrapped = []

//     for (let i = 1; i < n - 1; i++) {
//         let maxRight = 0;
//         let maxLeft = 0;

//         for (let j = i - 1; j >= 0; j--) {
//             maxLeft = Math.max(heights[j], maxLeft)
//         }

//         for (let j = i + 1; j < n; j++) {
//             maxRight = Math.max(heights[j], maxRight)
//         }

//         trapWater = Math.min(maxLeft, maxRight) - heights[i]
//         console.log(trapWater < 0 ? 0 : trapWater)

//         // waterTrapped.push(trapWater < 0 ? 0 : trapWater)
//     }

// }

function trapRainWater(arr) {
    let n = arr.length;
    let leftMax = new Array(8).fill(0);
    let rightMax = new Array(8).fill(0);
    let sum = 0;

    leftMax[0] = arr[0]
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], arr[i])
    }

    rightMax[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], arr[i])
    }

    for (i = 1; i < n - 1; i++) {
        trappedWater = Math.min(leftMax[i], rightMax[i]) - arr[i];
        // console.log(trappedWater)
        sum = sum + trappedWater;
    }

    return sum;
}


// console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3]))
console.log(trapRainWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(trapRainWater([1,1]))
console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))