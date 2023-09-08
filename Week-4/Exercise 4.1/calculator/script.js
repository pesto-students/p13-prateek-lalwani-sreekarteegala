class Calculator {
    add(a, b) {
        return a + b;
    };

    subtract(a, b) {
        return a - b;
    };

    multiply(a, b) {
        return a * b;
    };

    divide(a, b) {
        if (b == 0) {
            throw new Error("Cannot Divide by Zero");
        }

        return a / b;
    };
};

class ScientificCalculator extends Calculator {
    square(num) {
        return num * num;
    };

    cube(num) {
        return num * num * num;
    };

    power(power, base) {
        return Math.pow(base, power);
    };
};

const scientificCalculator = new ScientificCalculator();

// 1. Using the "call" method to invoke the "add" method of the Calculator class
const add = scientificCalculator.add.call(null, 10, 5);
console.log("Result using 'call' method for add with numbers 10, 5: ", add);

// Using the "apply" method, invoke the "subtract" method of the Calculator class with arguments 10 and 5.
const subtract = scientificCalculator.subtract.apply(null, [10, 5]); // apply accepts arguments as array
console.log("Result using 'apply' method for subtract with numbers 10, 5: ", subtract);

// Using the "bind" method, create a new method named "multiplyByTwo" that multiplies a number by 2 
const multiplyByTwo = scientificCalculator.multiply.bind(scientificCalculator, 2);
console.log("Result of 'multiplyByTwo' method with number 10: ", multiplyByTwo(10));
console.log("Result of 'multiplyByTwo' method with number 5: ", multiplyByTwo(5));

// Using the "bind" method, create a new method named "powerOfThree" that raises a number to the power of 3
const powerOfThree = scientificCalculator.power.bind(scientificCalculator, 3);
console.log("Result of 'powerOfThree' method with number 3: ", powerOfThree(3));
console.log("Result of 'powerOfThree' method with number 2: ", powerOfThree(2));
