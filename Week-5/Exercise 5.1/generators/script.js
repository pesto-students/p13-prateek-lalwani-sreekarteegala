// Create generator functions that loops and creates symbol from input
function* symbolGenerator(array) {
    for (let i = 0; i < array.length; i++) {
        yield Symbol(array[i]);
    }
};

const input = ['hello', 'world', 'test'];
const generator = symbolGenerator(input); // function generator is created with input

// Loop through the generator with generator iterator
for (const sym of generator) {
    console.log(sym);
}