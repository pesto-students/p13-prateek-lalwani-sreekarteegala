class BankAccount {
    // Creating private variables
    #accountNumber;
    #bankBalance;
    #accountHolderName;

    constructor(accountNumber, bankBalance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#bankBalance = bankBalance;
        this.#accountHolderName = accountHolderName;
    }

    get getAccountNumber() {
        return this.#accountNumber;
    }

    get getAccountHolderName() {
        return this.#accountHolderName;
    }

    get getBankBalance() {
        return this.#bankBalance;
    }

    addBankBalance(amount) {
        this.#bankBalance += amount;
    }

    withdrawBankBalance(amount) {
        this.#bankBalance -= amount;
    }

}

// Creating a Sub Class, as BankAccount as parent class 
class CheckingAccount extends BankAccount {
    constructor(accountNumber, bankBalance, accountHolderName) {
        super(accountNumber, bankBalance, accountHolderName);
    }

    deposit(amount) {
        this.addBankBalance(amount);
    }

    withdraw(amount) {
        this.withdrawBankBalance(amount);
    }
}

// Creating a Sub Class, as BankAccount as parent class
class SavingsAccount extends BankAccount {
    constructor(accountNumber, bankBalance, accountHolderName) {
        super(accountNumber, bankBalance, accountHolderName);
    }

    deposit(amount) {
        this.addBankBalance(amount);
    }

    withdraw(amount) {
        if (amount <= this.getBankBalance) {
            this.withdrawBankBalance(amount);
        } else {
            throw new Error("Withdrawal failed: Insufficient balance");
        }
    }
}

// Creating instance of two subClasses
const checkingAcc = new CheckingAccount("C12345", 1000, "Prashanth");
const savingsAcc = new SavingsAccount("S54321", 500, "Varma");

// Printing final scenario
console.log("Checking Account Created");
console.log("balance: ", checkingAcc.getBankBalance); // Expected output: balance: 1000

// User making deposit into Checking Account
console.log("User Deposit 1000 into Checking Account");
checkingAcc.deposit(1000);
console.log("balance: ", checkingAcc.getBankBalance); // Expected output: balance: 2000

// User making withdraw from Checking Account
console.log("user Withdraw 250 from Checking Account.");
checkingAcc.withdraw(250);
console.log("balance: ", checkingAcc.getBankBalance); // Expected output: balance: 1750


console.log("Savings Account Created");
console.log("balance: ", savingsAcc.getBankBalance); // Expected output: balance: 500

// User making deposit into Savings Account
console.log("User Deposit 1500 into Savings Account");
savingsAcc.deposit(1500);
console.log("balance: ", savingsAcc.getBankBalance); // Expected output: balance: 2000

// User making deposit from Savings Account
console.log("user Withdraw 500 from Savings Account.");
savingsAcc.withdraw(500);
console.log("balance: ", savingsAcc.getBankBalance); // Expected output: balance 1500

// savingsAcc.withdraw(1600);
