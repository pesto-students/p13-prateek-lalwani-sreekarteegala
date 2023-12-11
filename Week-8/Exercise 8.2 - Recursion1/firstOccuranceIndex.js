// function firstIndexOfOccurrenceRecursive(arr, target, index) {
//     // TODO: Implement the recursive function
//     if (arr[index] == target) {
//         return index;
//     }

//     if (index == arr.length - 1) {
//         return -1;
//     }

//     return firstIndexOfOccurrenceRecursive(arr, target, index + 1)
// }


// function firstIndexOfOccurrenceMain(arr, target) {
//     // TODO: Implement the main function

//     return firstIndexOfOccurrenceRecursive(arr, target, 0)
// }

let output = []
function firstIndexOfOccurrenceRecursive(arr, target, index) {
    // TODO: Implement the recursive function
    if (arr[index] == target) {
        // output.push(index);
        return index;
    }

    if (index == arr.length - 1) {
        // return output;
        return -1;
    }

    return firstIndexOfOccurrenceRecursive(arr, target, index + 1)
}


function firstIndexOfOccurrenceMain(arr, target) {
    // TODO: Implement the main function

    return firstIndexOfOccurrenceRecursive(arr, target, 0)
}

console.log(firstIndexOfOccurrenceMain([2, 4, 3, 5, 4], 6));