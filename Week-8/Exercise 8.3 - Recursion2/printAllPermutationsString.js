function printAllPermutations(str) {
    // TODO: Implement the printAllPermutations function\n
    const permutations = []
    permute(str, 0, permutations);

    // for (const value of permutations) {
    //     console.log(value);
    //     if (value == permutations[permutations.length - 1]){
    //         return value;
    //     }
    //     console.log(value)
    // }

    return permutations;
}

function permute(str, start, permutations) {
    // TODO: Implement the permute function
    if (start == str.length - 1) {
        permutations.push(str); // save the string in array and then return from the loop

        return;
    } else {
        for (let i = start; i <= str.length - 1; i++) {
            str = swap(str, start, i)
            permute(str, start + 1, permutations);
            str = swap(str, start, i)
        }
    }
}

function swap(str, i, j) {
    let temp = str.split("");
    [temp[i], temp[j]] = [temp[j], temp[i]];
    return temp.join("");
}


// console.log(printAllPermutations("ABCDEFG"))
console.log(printAllPermutations("abc"))