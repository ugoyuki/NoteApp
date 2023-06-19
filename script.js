const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

const showNotes = () =>{
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
        
    }
})

const updateStorage = () =>{
    localStorage.setItem("notes",notesContainer.innerHTML);
}

document.addEventListener("keydown",(event) =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})