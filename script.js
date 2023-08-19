const btn = document.querySelector("button")
const div = document.querySelector(".container")



btn.addEventListener("click", function(){
    addnote()
})

const addnote = function(){
const notebox = document.createElement("div")
notebox.classList.add('notes');
notebox.innerHTML = `<textarea name="note1" id="note1" placeholder="enter a note"></textarea>
<i class="fa-solid fa-floppy-disk" id="save" ></i>
<i class="delbtn fa-regular fa-trash-can" id="trash" ></i>`

div.appendChild(notebox)


}

const del = document.querySelector(".delbtn")

const remvnote = function(){
    notebox.remove()
}

del.addEventListener("click", function(){
    remvnote()
})

