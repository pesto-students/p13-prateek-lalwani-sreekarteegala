function getShortestUniqueSubstring(arr, str) {
    // your code goes here
    let arrlen = arr.length;
    let strlen = str.length;

    let minlen = 0;

    console.log(str)
    for (let i = 0; i <= strlen; i++) {
        for (j = i + arrlen; j <= strlen; j++) {
            console.log(str.slice(i, j))

            for (k = i; k <= j; k++) {
                
            }
        }
    }
}

let arr = ['x', 'y', 'z'], str = "xyyzyzyx";

getShortestUniqueSubstring(arr, str)