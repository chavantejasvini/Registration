let email = document.getElementById("email");
let password = document.getElementById("password");

function fetchLoginData() {
    let userCred = JSON.parse(localStorage.getItem("userData"));

    if (userCred && email.value === userCred.username && password.value === userCred.password) {
        window.open("Homepage.html", "_self"); 
    } else {
        alert("Wrong Credentials");
    }
}
