let form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if(savedUser == null){

        alert("Please Register First");
        return;

    }

    if(email === savedUser.email && password === savedUser.password){

        localStorage.setItem("loggedIn", "true");

        alert("Login Successful");

        window.location.href = "profile.html";

    }else{

        alert("Invalid Email or Password");

    }

});