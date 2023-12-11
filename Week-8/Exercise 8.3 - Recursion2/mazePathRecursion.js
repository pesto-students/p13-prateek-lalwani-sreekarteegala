// function floodFill(grid, row, col, visited, startingColor, newColor) {
//     // TODO: Implement the floodFill function
//     // console.log(grid)
//     if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return

//     if (grid[row][col] != startingColor) { return };

//     grid[row][col] = newColor;

//     floodFill(grid, row + 1, col, visited, startingColor, newColor);
//     floodFill(grid, row - 1, col, visited, startingColor, newColor);
//     floodFill(grid, row, col + 1, visited, startingColor, newColor);
//     floodFill(grid, row, col - 1, visited, startingColor, newColor);
// }

// function performFloodFill(grid, startRow, startCol, newColor) {
//     // TODO: Implement the performFloodFill function
//     printGrid(grid)
//     floodFill(grid, startRow, startCol, true, grid[startRow][startCol], 2);
//     printGrid(grid)
// }

// function printGrid(grid){
//     for (let i = 0; i < grid.length; i++) {
//         console.log(grid[i].join("  "))
//     }
// }

// // console.log(performFloodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
// performFloodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)
function mazePathRecursive(row, col, numRows, numCols, currentPath, result) {
    //TODO: Implement the mazePathRecursive function 

    // if (row > numRows || col > numCols) {
    //     // mazePathRecursive(row, col + 1, numRows, numCols, currentPath + "R", result);
    //     return;
    // }

    if (row == numRows || col == numCols) {
        // if (currentPath.length >= numRows) {
            // console.log(currentPath)
            result.push(currentPath);

            return result;
        // }
    }


    for (let i = 1; i <= numCols - col; i++) {
        mazePathRecursive(row, col + 1, numRows, numCols, currentPath + "R", result);
    }
    for (let i = 1; i <= numRows - row; i++) {
        mazePathRecursive(row + 1, col, numRows, numCols, currentPath + "D", result);
    }

    // currentPath.pop();


}

function mazePathMain(numRows, numCols) {
    //TODO: Implement the mazePathMain funtion
    let grid = new Array(numRows).fill(0).map(() => new Array(numCols).fill(0));
    console.log(grid);
    const result = [];
    currentPath = "";
    mazePathRecursive(0, 0, numRows, numCols, currentPath, result);
    // console.log
    return result;
}

console.log(mazePathMain(3, 3))
