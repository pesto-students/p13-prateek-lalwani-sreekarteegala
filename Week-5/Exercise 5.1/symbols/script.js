// Generate function using closure to make count variable private
function generate() {
    let count = 1;

    function generateTransactionId() {
        const symbol = Symbol(`TRANSACTION_ID_${count++}`);
        
        return symbol;
    }

    return generateTransactionId;
}

// get generateTransactionId() instance;
const generateTransactionId = generate();

// Generate Trans_ID's
const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);
