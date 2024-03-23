let un = document.getElementById("email");
let pass = document.getElementById("password");
let add = document.getElementById("address");
let gd = document.getElementById("graduation");
let brnch = document.getElementById("branch");
let yop = document.getElementById("yop");

function registerUser() {
    let userData = {
        username: un.value,
        password: pass.value,
        address: add.value,
        graduation: gd.value, // Changed "=" to ":"
        branch: brnch.value, // Changed "=" to ":"
        yop: yop.value // Changed "=" to ":"
    };
    saveData(userData);
    clearField();
    window.open("Login.html", "_self"); // Corrected the method to open a new window/tab
}

function clearField() { // Corrected the function name to clearField
    un.value = "";
    pass.value = "";
    add.value = "";
    gd.value = "";
    brnch.value = "";
    yop.value = "";
}

function saveData(userData) {
    localStorage.setItem("userData", JSON.stringify(userData)); // Corrected the syntax
}
