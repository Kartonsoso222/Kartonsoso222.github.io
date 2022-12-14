const btn1 = document.querySelector("#btn1");
const popup = document.querySelector(".menu-popup");
const container = document.querySelector(".container");
let reached = false;
popup.addEventListener("click", ()=>{
    if(!reached)
    {
        document.querySelector(".menu").style.left = "0px"; 
        reached = true;
    }
    else
    {
        document.querySelector(".menu").style.left = "-160px"; 
        reached = false;
    }
})
btn1.addEventListener("click", ()=>{
    let title_content = prompt("Add a note header")
    let note_content = prompt("Add a note") 
    let div = document.createElement("div")
    let n_title = document.createElement("n_title")
    let content = document.createElement("content")
    div.classList.add("note")
    n_title.classList.add("title")
    content.classList.add("note-content")
    n_title.innerHTML = title_content + "<br>";
    content.innerHTML = note_content;
    container.appendChild(div)
    div.appendChild(n_title)
    div.appendChild(content)
    console.log(div.children)
})