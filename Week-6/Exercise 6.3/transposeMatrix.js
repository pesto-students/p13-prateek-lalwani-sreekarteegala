/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transposeMatrix(matrix) {
    // PLACEHOLDER_JAVASCRIPT_TRANSPOSE_MATRIX_BODY
    let rows = matrix.length, cols = matrix[0].length;
    let output = new Array(cols).fill(0).map(() => new Array(rows).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            output[j][i] = matrix[i][j]
        }
    }

    return displayMatrix(output);
}

/**
 * @param {number[][]} matrix
 */
function displayMatrix(matrix) {
    console.log('Matrix:');
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

/**
 * @param {string} rows
 * @param {string} cols
 * @param {string[]} elements
 */
function takeMatrixInput(rows, cols, elements) {
    elements = elements.map(Number);
    let input = { 'rows': rows, 'cols': cols, ...elements };
    console.log(input)
    let top = 0;
    let arrIdx = 0;
    let matrix = [];

    if (elements.length == 1) {
        console.log(elements.join(" "))
        return elements
    };

    while (top < rows) {
        let temp = [];

        for (let i = 0; i < cols; i++) {
            temp.push(input[arrIdx])
            arrIdx++
        }
        top++;
        matrix.push(temp);
    }

    return transposeMatrix(matrix);
}


// function takeMatrixInput(rows, cols, arr) {
//     const input = { 'rows': rows, 'cols': cols, ...arr };
//     let top = 0;
//     let arrIdx = 0;

//     let matrix = [];

//     while (top <= rows) {
//         let temp = [];

//         for (let i = 0; i < cols; i++) {
//             temp.push(input[arrIdx])
//             arrIdx++
//         }
//         top++;
//         matrix.push(temp);
//     }

//     console.log(matrix)
//     // transposeMatrix(matrix, rows, cols)

//     let output = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));

//     for (let i = 0; i < cols; i++) {
//         for (let j = 0; j <= rows; j++) {
//             output[j][i] = matrix[i][j]
//         }
//     }

//     console.log(output)
// }

var transpose = function (matrix) {
    let rows = matrix.length
    cols = matrix[0].length
    output = new Array(cols).fill(0).map(() => new Array(rows).fill(0));

    console.log(rows, cols, matrix);
    console.log(output);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            console.log("1", matrix[i][j])
            output[j][i] = matrix[i][j]
        }
    }

    return output;
};

console.log(transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// takeMatrixInput(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
// takeMatrixInput(2, 4, ["1", "2", "3", "4", "5", "6", "7", "8"])
// takeMatrixInput(1, 1, ["9"])
// takeMatrixInput(4, 2, ["1", "2", "3", "4", "5", "6", "7", "8"])
