let uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", function(event){

event.preventDefault();

let title = document.getElementById("title").value;

let subject = document.getElementById("subject").value;

let description = document.getElementById("description").value;

let pdf = document.getElementById("pdf").files[0];

if(title==="" || subject==="" || description===""){

alert("Please fill all fields");

return;

}

let note={

title:title,

subject:subject,

description:description,

fileName: pdf ? pdf.name : "No File"

};

let notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.push(note);

localStorage.setItem("notes",JSON.stringify(notes));

alert("Notes Uploaded Successfully");

uploadForm.reset();

});