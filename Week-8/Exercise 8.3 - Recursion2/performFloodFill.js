function floodFill(grid, row, col, visited, startingColor, newColor) {
    // TODO: Implement the floodFill function
    // console.log(grid)
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return

    if (grid[row][col] != startingColor) { return };

    grid[row][col] = newColor;

    floodFill(grid, row + 1, col, visited, startingColor, newColor);
    floodFill(grid, row - 1, col, visited, startingColor, newColor);
    floodFill(grid, row, col + 1, visited, startingColor, newColor);
    floodFill(grid, row, col - 1, visited, startingColor, newColor);
}

function performFloodFill(grid, startRow, startCol, newColor) {
    // TODO: Implement the performFloodFill function
    printGrid(grid)
    floodFill(grid, startRow, startCol, true, grid[startRow][startCol], 2);
    printGrid(grid)
}

function printGrid(grid){
    for (let i = 0; i < grid.length; i++) {
        console.log(grid[i].join("  "))
    }
}

// console.log(performFloodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
performFloodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)