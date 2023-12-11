function subsequenceRecursive(str, index, subSet, powerSet) {
    //TODO: Implement the subsequenceRecursive function

    if(str.length == index){
        powerSet.push([...subSet].join(""));

        return;
    }

    subSet.push(str[index]);
    subsequenceRecursive(str, index+1, subSet, powerSet);

    subSet.pop();
    subsequenceRecursive(str, index+1, subSet, powerSet);
}

function subsequenceMain(str) {
    //TODO: Implement the subsequenceMain function
    let input = str.split("");
    let powerSet = [];

    subsequenceRecursive(input, 0, [], powerSet)

    return powerSet.sort();
}

console.log(subsequenceMain("abc"))