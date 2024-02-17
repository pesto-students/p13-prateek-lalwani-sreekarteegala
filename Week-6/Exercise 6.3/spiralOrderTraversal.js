[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

/**
 * @param {number[][]} matrix
 * @return {string}
 */
function spiralOrderTraversal(matrix) {
    // PLACEHOLDER_JAVASCRIPT_SPIRAL_ORDER_TRAVERSAL_BODY
    let result = [],
        top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result.join(" ");

}


console.log(spiralOrderTraversal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
));