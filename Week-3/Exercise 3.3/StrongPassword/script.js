const pwd = document.getElementById('pwd')
const confirmPwd = document.getElementById('confirmPwd')
const errorNode = document.getElementById('error');
const commonPwds = [
    "password",
    "12345678",
    "87654321"
]

function isStrongPassword(pwd) {
    if (pwd.length < 8) {
        return "Password Too Short"
    }

    if (pwd.includes("password")) {
        return "Password Contains Text 'password'";
    }

    if (commonPwds.includes(pwd)) {
        return "Most commonly used Password - Try with different password";
    }

    if (!/[A-Z]/.test(pwd)) {
        return "Password Doesnot contain capital Letter";
    }

    return "Password is Strong";
};

document.getElementById('button').addEventListener('click', (e) => {
    if (!pwd.value || !confirmPwd.value) {
        errorNode.innerHTML = 'Please Enter Password';
        errorNode.style.color = "red";
    } else if (pwd.value !== confirmPwd.value) {
        errorNode.innerHTML = 'Passwords Does not match';
        errorNode.style.color = "red";
    } else {
        let pwdStrength = isStrongPassword(pwd.value);
        errorNode.innerHTML = pwdStrength;
        errorNode.style.color = pwdStrength !== "Password is Strong" ? "red" : "green";
    }
})

console.log(isStrongPassword("qwerty"));
console.log(isStrongPassword("password@12345"));
console.log(isStrongPassword("qwerty123"));
console.log(isStrongPassword("Qwerty123"));
