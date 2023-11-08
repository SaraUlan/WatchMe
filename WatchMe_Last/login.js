// Check if a user is logged in and their admin status in localStorage
const user = localStorage.getItem("user");

if (user) {
    // User is logged in
    document.getElementById("loginItem").style.display = "none"; // Hide the "Login" link
    document.getElementById("usernameLink").textContent = user; // Set the username
    document.getElementById("usernameLink").style.display = "block"; // Show the username
} else {
    // User is not logged in
    document.getElementById("loginItem").style.display = "block"; // Show the "Login" link
    document.getElementById("usernameLink").style.display = "none"; // Hide the username
}

if (user === "Admin") {
    // User is an admin
    document.getElementById("adminItem").style.display = "block"; // Show the "Admin" link
}
