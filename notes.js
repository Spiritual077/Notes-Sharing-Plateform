// Get all notes from Local Storage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Get Notes Container
let notesList = document.getElementById("notesList");

// ===============================
// Display Notes
// ===============================

function displayNotes(data){

    notesList.innerHTML = "";

    if(data.length === 0){

        notesList.innerHTML = `
            <h2 style="text-align:center;color:gray;">
                No Notes Found 📂
            </h2>
        `;

        return;
    }

    data.forEach(function(note,index){

        notesList.innerHTML += `

        <div class="note-card">

            <div class="card-top">

                <span class="subject-badge">
                    ${note.subject}
                </span>

                <span class="rating-badge">
                    ⭐ ${note.rating || 0}/5
                </span>

            </div>

            <h3>${note.title}</h3>

            <p>${note.description}</p>

            <p class="file-name">
                📄 ${note.fileName}
            </p>

            <div class="buttons">

                <button
                class="download"
                onclick="downloadNote('${note.fileName}')">

                    📥 Download

                </button>

                <button
                class="favorite"
                onclick="favoriteNote(${index})">

                    ${note.favorite ? "💚 Favorited" : "❤️ Favorite"}

                </button>

                <button
                class="delete"
                onclick="deleteNote(${index})">

                    🗑 Delete

                </button>

                <button
                class="rate"
                onclick="rateNote(${index})">

                    ⭐ Rate

                </button>

            </div>

        </div>

        `;

    });

}

// Show All Notes
displayNotes(notes);

// ===============================
// Download
// ===============================

function downloadNote(file){

    alert("Downloading : " + file);

}

// ===============================
// Search
// ===============================

let search = document.getElementById("search");

search.addEventListener("keyup",function(){

    let value = search.value.toLowerCase();

    let filtered = notes.filter(function(note){

        return note.title.toLowerCase().includes(value)
        || note.subject.toLowerCase().includes(value);

    });

    displayNotes(filtered);

});

// ===============================
// Rating
// ===============================

function rateNote(index){

    let rating = prompt("Enter Rating (1-5)");

    if(rating >= 1 && rating <= 5){

        notes[index].rating = rating;

        localStorage.setItem(
            "notes",
            JSON.stringify(notes)
        );

        displayNotes(notes);

    }

    else{

        alert("Invalid Rating");

    }

}

// ===============================
// Favorite Toggle
// ===============================

function favoriteNote(index){

    notes[index].favorite = !notes[index].favorite;

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    displayNotes(notes);

}

// ===============================
// Delete
// ===============================

function deleteNote(index){

    let confirmDelete = confirm("Delete this note?");

    if(confirmDelete){

        notes.splice(index,1);

        localStorage.setItem(
            "notes",
            JSON.stringify(notes)
        );

        displayNotes(notes);

    }

}