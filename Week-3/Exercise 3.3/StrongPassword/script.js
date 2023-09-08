const commonPwds = [
    "password",
    "12345678",
    "87654321"
]

function isStrongPassword(pwd) {
    if (pwd.length < 8) {
        return "false - Too Short"
    }

    if (pwd.includes("password")) {
        return "false - Contains 'password'";
    }

    if(commonPwds.includes(pwd)){
        return "false - Most commonly used Password";
    }

    if (!/[A-Z]/.test(pwd)) {
        return "Doesnot contain capital Letter";
    }

    return "Strong Password";
};

function checkPwd(event){
    event.preventDefault();

    let pwdInput = document.getElementById('password').value;
    let pwdStrength = isStrongPassword(pwdInput);

    document.getElementsByTagName("p")[0].innerHTML = pwdStrength;
}

document.getElementById("button").addEventListener("click", checkPwd);