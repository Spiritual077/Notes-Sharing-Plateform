// Get logged in user

let user = JSON.parse(localStorage.getItem("user"));

if(user){

    document.getElementById("welcomeUser").textContent =
    "Welcome, " + user.name + " 👋";

}else{

    document.getElementById("welcomeUser").textContent =
    "Welcome to Notes Sharing Platform";

}

let notes = JSON.parse(localStorage.getItem("notes")) || [];

document.getElementById("totalNotes").textContent = notes.length;

let favorite = 0;
let rated = 0;

notes.forEach(function(note){

    if(note.favorite){
        favorite++;
    }

    if(note.rating){
        rated++;
    }

});

document.getElementById("favoriteNotes").textContent = favorite;

document.getElementById("ratedNotes").textContent = rated;

// Recent Notes

let recentContainer = document.getElementById("recentNotes");

// Last 3 notes
let recent = notes.slice(-3).reverse();

recent.forEach(function(note){

    recentContainer.innerHTML += `

        <div class="note-box">

            <h3>📄 ${note.title}</h3>

            <p>${note.subject}</p>

        </div>

    `;

    // Dark Mode

let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML = "☀️";

    }else{

        themeBtn.innerHTML = "🌙";

    }

});

// User Avatar

let avatar = document.getElementById("avatar");

if(user){

    avatar.textContent = user.name.charAt(0).toUpperCase();

}

// Logout

document.getElementById("logoutBtn").addEventListener("click", function(){

    localStorage.removeItem("user");

    alert("Logout Successful");

    window.location.href="login.html";

});

// Today's Date

let today = new Date();

document.getElementById("todayDate").textContent =
today.toLocaleDateString();

// Greeting

let hour = today.getHours();

let greet = "";

if(hour < 12){

    greet = "Good Morning ☀️";

}
else if(hour < 18){

    greet = "Good Afternoon 🌤️";

}
else{

    greet = "Good Evening 🌙";

}

document.getElementById("greeting").textContent = greet;

// Live Time

function showTime(){

    let now = new Date();

    document.getElementById("liveTime").textContent =
    now.toLocaleTimeString();

}

showTime();

setInterval(showTime,1000);

});