function displayWindowProperties() {
    document.getElementById("useragent").innerHTML += window.navigator.userAgent;
    console.log("useragent: ", window.navigator.userAgent);

    document.getElementById("width").innerHTML += window.screen.width;
    document.getElementById("height").innerHTML += window.screen.height;
    console.log("width: ", window.screen.width);
    console.log("height: ", window.screen.height);


    document.getElementById("href").innerHTML += window.location.href;
    document.getElementById("pathname").innerHTML += window.location.pathname;
    console.log("Location href: ", window.location.href); // Current page path along without query params
    console.log("Location Path: ", window.location.pathname); // Current page path along with query params if any

    sessionStorage.setItem('userName', "Sai Sreekar");
    localStorage.setItem('userMail', "teegalasreekar@gmail.com");

    console.log(sessionStorage.getItem('userName')); // Sai Sreekar
    console.log(localStorage.getItem('userMail')); // teegalasreekar@gmail.com
    document.getElementById("session").innerHTML += sessionStorage.getItem('userName');
    document.getElementById("localstore").innerHTML += localStorage.getItem('userMail');
}