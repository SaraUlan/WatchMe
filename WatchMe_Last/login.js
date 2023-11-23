const logged = localStorage.getItem("logged");
console.log(logged);
if (logged == "true") {
    // User is logged in
    console.log("logged");
    document.getElementById("loginItem").style.display = "none";
    document.getElementById("usernameLink").textContent = JSON.parse(
        localStorage.user
    ).user;
    document.getElementById("usernameLink").style.display = "block";
    document.getElementById("logoutButton").style.display = "block";

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("user");
            localStorage.setItem("logged", false);
            location.reload();
        });
    }
} else {
    document.getElementById("loginItem").style.display = "block";
    document.getElementById("usernameLink").style.display = "none";
}

if (JSON.parse(localStorage.user).user === "Admin") {
    document.getElementById("adminItem").style.display = "block";
}
