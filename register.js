let form = document.getElementById("registerForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let confirmPassword = document.getElementById("confirmPassword").value;

    if(name==="" || email==="" || password==="" || confirmPassword===""){

        alert("Please fill all fields");

        return;
    }

    if(password !== confirmPassword){

        alert("Passwords do not match");

        return;
    }

    let user={

        name:name,

        email:email,

        password:password

    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    window.location.href="login.html";

});