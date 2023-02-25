//Stałe zdefiniowane dla późniejszego odniesienia
const d1 = document.querySelector("#div1")
const d2 = document.querySelector("#div2")
const d3 = document.querySelector("#div3")
const d4 = document.querySelector("#div4")
const d5 = document.querySelector("#div5")
const d6 = document.querySelector("#div6")
const d7 = document.querySelector("#div7")
const d8 = document.querySelector("#div8")
const d9 = document.querySelector("#div9")


let turn = 1;
let player = "x";
let xscore = 0;
let Oscore = 0;

//zmienne od wyników

let files = [false, false, false, false, false, false, false, false, false]


function changefile(filenumber)
{
    turn++;
    if(turn % 2 == 0)
    {
        player = "x"
    }
    else 
    {
        player = "O"
    }
        document.querySelector("#div" + filenumber).innerHTML = player
        document.querySelector("#div" + filenumber).style.pointerEvents = "none"
        files[filenumber-1] = player
        wincondition()
}

d1.addEventListener("click", ()=>{
    changefile(1)
})
d2.addEventListener("click", ()=>{
    changefile(2)
})
d3.addEventListener("click", ()=>{
    changefile(3)
})
d4.addEventListener("click", ()=>{
    changefile(4)
})
d5.addEventListener("click", ()=>{
    changefile(5)
})
d6.addEventListener("click", ()=>{
    changefile(6)
})
d7.addEventListener("click", ()=>{
    changefile(7)
})
d8.addEventListener("click", ()=>{
    changefile(8)
})
d9.addEventListener("click", ()=>{
    changefile(9)
})

function wincondition()
{
    if (files[0] == "x" && files[1] == "x" && files[2] == "x")
    {
        winx()    }
    else if (files[3] == "x" && files[4] == "x" && files[5] == "x")
    {
        winx()    }
    else if (files[6] == "x" && files[7] == "x" && files[8] == "x")
    {
        winx()    }
    else if (files[0] == "x" && files[3] == "x" && files[6] == "x")
    {
        winx()    }
    else if (files[1] == "x" && files[4] == "x" && files[7] == "x")
    {
        winx()    }
    else if (files[2] == "x" && files[5] == "x" && files[8] == "x")
    {
        winx()    }
    else if (files[0] == "x" && files[4] == "x" && files[8] == "x")
    {
        winx()    }
    else if (files[2] == "x" && files[4] == "x" && files[6] == "x")
    {
        winx()
    }

    if (files[0] == "O" && files[1] == "O" && files[2] == "O")
    {
        wino()    }
    else if (files[3] == "O" && files[4] == "O" && files[5] == "O")
    {
        wino()    }
    else if (files[6] == "O" && files[7] == "O" && files[8] == "O")
    {
        wino()    }
    else if (files[0] == "O" && files[3] == "O" && files[6] == "O")
    {
        wino()   }
    else if (files[1] == "O" && files[4] == "O" && files[7] == "O")
    {
        wino()   }
    else if (files[2] == "O" && files[5] == "O" && files[8] == "O")
    {
        wino()    }
    else if (files[0] == "O" && files[4] == "O" && files[8] == "O")
    {
        wino()    }
    else if (files[2] == "O" && files[4] == "O" && files[6] == "O")
    {
        wino()
    }
    if (turn == 10)
    {
        draw()
    }
}




function winx()
{
    xscore++
    document.querySelector(".xres").innerHTML = xscore
    for (i=1; i <=9; i++)
    {
         document.querySelector("#div" + i).innerHTML = i
         document.querySelector("#div" + i).style.pointerEvents = "auto"
    }
    turn = 1
    player = "x"
}
function wino()
{
    Oscore++
    document.querySelector(".Ores").innerHTML = Oscore
    for (i=1; i <=9; i++)
    {
         document.querySelector("#div" + i).innerHTML = i
         document.querySelector("#div" + i).style.pointerEvents = "auto"
    }
    turn = 1
    player = "x"
}
function draw()
{
    alert("draw")
    for (i=1; i <=9; i++)
    {
         document.querySelector("#div" + i).innerHTML = i
         document.querySelector("#div" + i).style.pointerEvents = "auto"
    }
    turn = 1
    player = "x"
}