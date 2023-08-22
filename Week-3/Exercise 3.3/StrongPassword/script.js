function isStrongPassword(pwd) {
    if (pwd.length < 8) {
        return "false - Too Short"
    }

    if (pwd.includes("password")) {
        return "false - Contains 'password'";
    }

    if (!/[A-Z]/.test(pwd)) {
        return "Doesnot contain capital Letter";
    }

    return true;
};

console.log(isStrongPassword("qwerty"));;
console.log(isStrongPassword("password@12345"));
console.log(isStrongPassword("qwerty123"));;
console.log(isStrongPassword("Qwerty123"));