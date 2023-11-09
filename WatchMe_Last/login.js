const user = localStorage.getItem("user");

if (user) {
    // User is logged in
    document.getElementById("loginItem").style.display = "none";
    document.getElementById("usernameLink").textContent = user;
    document.getElementById("usernameLink").style.display = "block";
    document.getElementById("logoutButton").style.display = "block";

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("user");
            location.reload();
        });
    }
} else {
    document.getElementById("loginItem").style.display = "block";
    document.getElementById("usernameLink").style.display = "none";
}

if (user === "Admin") {
    document.getElementById("adminItem").style.display = "block";
}
