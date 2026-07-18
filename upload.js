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

let pdf = document.getElementById("pdf");

let fileName = document.getElementById("fileName");

pdf.addEventListener("change", function(){

    let file = pdf.files[0];

    if(!file){

        return;

    }

    if(file.type !== "application/pdf"){

        alert("Please Upload PDF Only");

        pdf.value="";

        fileName.textContent="";

        return;

    }

    fileName.textContent="Selected File : " + file.name;

});

});