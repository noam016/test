submitBTN = document.getElementById("submitBTN");
header = document.getElementById("isCorrect")


function alertLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (password == "noam2212" && username == "noam") {
        header.innerHTML = "YES";
    } else {
        header.innerHTML = "No";
    }
}