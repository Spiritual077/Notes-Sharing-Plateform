// Get all notes from Local Storage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Get notes container
let notesList = document.getElementById("notesList");

// Display Notes Function
function displayNotes(data){

    notesList.innerHTML = "";

    data.forEach(function(note, index){

        notesList.innerHTML += `

        <div class="note-card">

            <h3>${note.title}</h3>

            <p><strong>Subject:</strong> ${note.subject}</p>

            <p>${note.description}</p>

            <p>⭐ Rating : ${note.rating || 0}/5</p>

            <button onclick="downloadNote('${note.fileName}')">
                Download
            </button>

            <button onclick="rateNote(${index})">
                Give Rating
            </button>

            <button onclick="favoriteNote(${index})">
                ❤️ Favorite
            </button>

            <button onclick="deleteNote(${index})">
                🗑 Delete
            </button>

        </div>

        `;

    });

}

// Show all notes
displayNotes(notes);

// Download Function
function downloadNote(file){

    alert("Downloading : " + file);

}

// Search Notes
let search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    let filtered = notes.filter(function(note){

        return note.title.toLowerCase().includes(value);

    });

    displayNotes(filtered);

});

// Rating Function
function rateNote(index){

    let rating = prompt("Enter Rating (1-5)");

    if(rating >= 1 && rating <= 5){

        notes[index].rating = rating;

        localStorage.setItem("notes", JSON.stringify(notes));

        displayNotes(notes);

    }else{

        alert("Invalid Rating");

    }

}

// Favorite Function
function favoriteNote(index){

    notes[index].favorite = true;

    localStorage.setItem("notes", JSON.stringify(notes));

    alert("Added to Favorite ❤️");

    displayNotes(notes);

}

// Delete Function
function deleteNote(index){

    let confirmDelete = confirm("Delete this note?");

    if(confirmDelete){

        notes.splice(index,1);

        localStorage.setItem("notes", JSON.stringify(notes));

        displayNotes(notes);

    }

}