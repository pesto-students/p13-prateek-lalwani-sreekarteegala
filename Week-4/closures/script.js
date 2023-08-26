let firstCounter, secondCounter, firstValues, secondValues;

function counter() {
    let count = 0;

    function increment() {
        count++;

        return count;
    }

    return increment;
}

firstCounter = counter();
secondCounter = counter();
firstValues = [];
secondValues = [];

for (i = 0; i < 5; i++) {
    let firstCounterValue = firstCounter();

    firstValues.push(firstCounterValue);
}

for (i = 0; i < 3; i++) {
    let secondCounterValue = secondCounter();

    secondValues.push(secondCounterValue);
}

console.log("firstValues Array: ", firstValues);
console.log("secondValues Array: ", secondValues);
