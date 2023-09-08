let nums = [4, 5, 7, 9, 3, 8, 2];
let evenNums = [];
let oddNums = [];

function divideArray() {
    nums.forEach((n) => {
        if (n % 2 == 0)
            evenNums.push(n);
        else
            oddNums.push(n);
    })
    
    evenNums.sort();
    oddNums.sort();
}

divideArray();

console.log("Even numbers: ", evenNums.length || "None");
evenNums.forEach(n => console.log(n));

console.log("Odd numbers: ", oddNums.length || "None");
oddNums.forEach(n => console.log(n));