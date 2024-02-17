/**
 * @param {number} rows
 * @param {number} cols
 * @param {number[][]} array1
 * @param {number[][]} array2
 * @return {number[][]}
 */
function sumOfTwoMatrices(rows, cols, array1, array2) {
    let sumArr = [], result = [];
    let start = 0;

    if(array1.length != array2.length){
        return "Arrays must have the same dimensions.";
    }

    for (let i = 0; i < array1.length; i++) {
        sumArr.push(array1[i] + array2[i])
    }

    for (let i = 0; i < rows; i++) {
        let temp = [];

        for (let j = 0; j < cols; j++) {
            temp.push(sumArr[start]);
            start++;
        }
        result.push(temp);
    }

    return result;
}


sumOfTwoMatrices(2, 3, [1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12])

// 1  2  3
// 4  5  6

// 7  8  9
// 10 11 12

// [
//     [8, 10, 12],
//     [14, 16, 18]
// ]