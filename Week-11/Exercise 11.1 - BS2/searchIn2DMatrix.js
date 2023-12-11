function binarySearch(mat, row, l, r, x) {
    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (mat[row][mid] == x) {
            return true;
        } else if (mat[row][mid] > x) {
            r = mid - 1;
        } else {
            l = mid + 1
        }
    }

    return false;
}

function searchMatrix(mat, m, n, x) {
    let rowTop = 0, rowBot = m - 1;
    let colLeft = 0, colRight = n - 1;

    let colMid = Math.floor(colLeft + ((colRight - colLeft) / 2));

    // Do binary search in middle column.
    // Condition to terminate the loop when the
    // 2 desired rows are found
    while ((rowTop + 1) < rowBot) {
        let rowMid = Math.floor(rowTop + ((rowBot - rowTop) / 2));

        if (mat[rowMid][colMid] == x) {
            return true;
        } else if (mat[rowMid][colMid] > x) {
            rowBot = rowMid;
        } else {
            rowTop = rowMid
        }
    }

    // If element is present on
    // the mid of the two rows
    if (mat[rowTop][colMid] == x) {
        return true;
    } else if (mat[rowTop + 1][colMid] == x) {
        return true;
    }
    // Search element on 1st half of 1st row
    else if (x <= mat[rowTop][colMid - 1]) {
        return binarySearch(mat, rowTop, 0, colMid - 1, x)
    }
    // Search element on 2nd half of 1st row
    else if (x >= mat[rowTop][colMid + 1] && x <= mat[rowTop][colRight]) {
        return binarySearch(mat, rowTop, colMid + 1, colRight, x)
    }
    // Search element on 1nd half of 2st row
    else if (x <= mat[rowTop + 1][colMid - 1]) {
        return binarySearch(mat, rowTop + 1, 0, colMid - 1, x)
    } else {
        return binarySearch(mat, rowTop + 1, colMid + 1, colRight, x)
    }
}

function removeDup(arr) {
    let contents = arr.split(" ").map(Number);
    let m = contents[0]
    let n = contents[1]
    let x = contents[contents.length - 1];
    let matArr = contents.slice(2, contents.length - 1);
    let matrix = new Array();
    let row = new Array();

    for (let i = 0; i < matArr.length; i++) {
        row.push(matArr[i]);

        if (row.length == 4) {
            matrix.push(row);
            row = []
        }
    }

    return searchMatrix(matrix, m, n, x);
}

// console.log(starter("3 4 1 3 5 7 10 11 16 20 23 30 34 60 3"))
console.log(removeDup("3 4 1 3 5 7 10 11 16 20 23 30 34 60 3"))