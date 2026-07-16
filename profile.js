// Check if user is logged in
let loggedIn = localStorage.getItem("loggedIn");

if (loggedIn !== "true") {
    alert("Please Login First");
    window.location.href = "login.html";
}

// Get user data
let user = JSON.parse(localStorage.getItem("user"));

// Get notes data
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Show user details
document.getElementById("userName").textContent = user.name;
document.getElementById("userEmail").textContent = user.email;
document.getElementById("totalNotes").textContent = notes.length;

// Count favorite notes
let favoriteCount = 0;

for (let i = 0; i < notes.length; i++) {
    if (notes[i].favorite === true) {
        favoriteCount++;
    }
}

// Show favorite notes count
document.getElementById("favoriteNotes").textContent = favoriteCount;

// Logout
document.getElementById("logoutBtn").addEventListener("click", function () {

    // Remove login session only
    localStorage.removeItem("loggedIn");

    alert("Logout Successful");

    window.location.href = "login.html";

});