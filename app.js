console.log("welcome to keep notes");
showNotes();
// user add note
var notesObj;
let addBtn = document.getElementById("add-new-note");
addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById("new-note");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";

  // console.log(notesObj);
  showNotes();
});

// function to display notes on the page
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        
        <div class=" noteCard " style="width: 13.6rem;">
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text mt-4">
               ${element}
              </p>
              <button id="${index}" onclick="deleteNode(this.id)" class="btn del-btn">Delete Note</button>
            </div>
          </div>
        
        
        `;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use Add Note to add a new note`;
  }
}

// function for deleting notes
function deleteNode(index) {
  // console.log('deleting');
  let notes = localStorage.getItem("notes");

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("search-txt");
// let searchBtn=document.getElementById('search-btn');

search.addEventListener("input", function () {
  let inputVal = search.value;
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
