let x = 1
let y = 1

let b = 0

let applex = (Math.round(Math.random()*4)) + 1
let appley = (Math.round(Math.random()*4)) + 1

let score = 0
let cords = []
let moves = 0
let movescalc = 0
let done = false

document.querySelector(".div" + y + x).style.background = "green"
document.querySelector(".div" + y + x).style.backgroundImage = "url('ouczyska.png')"
document.querySelector(".div" + y + x).style.backgroundSize = "cover"


addEventListener("keydown",(e)=>{
    if(e.key == 'a')
    {
        moves++
        moveleft()
    }
    else if (e.key == 'w')
    {
        moves++
        moveforw()
    }
    else if (e.key == 's')
    {
        moves++
        moveback()
    }
    else if (e.key == 'd')
    {
        moves++
        moveright()
    }
})
function moveleft()
{
    if(x > 1)
    {
        x--
        clearmap()
    }
    else 
    {
        score = 0 
        document.querySelector(".score").innerHTML = score
        alert("You've hit the wall")
    }
}
function moveforw()
{
    if(y > 1)
    {
        y--
        clearmap()
    }
    else 
    {
        score = 0 
        document.querySelector(".score").innerHTML = score
        alert("You've hit the wall")
    }
}
function moveback()
{
    if(y < 5)
    {
        y++
        clearmap()
    }
    else 
    {
        score = 0 
        document.querySelector(".score").innerHTML = score
        alert("You've hit the wall")
    }
}
function moveright()
{
    if(x < 5)
    {
        x++
        clearmap()
    }
    else 
    {
        score = 0 
        document.querySelector(".score").innerHTML = score
        alert("You've hit the wall")    
    }
}

function clearmap()
{
    for (i=0; i<25; i++)
    {
        document.querySelectorAll("#div")[i].style.background = "white"
        document.querySelectorAll("#div")[i].style.backgroundImage = "none"
    }

    document.querySelector(".div" + appley + applex).style.background = "red"
    while(y==appley && x==applex)
    {
        spawnapple()
        score++
        document.querySelector(".score").innerHTML = score
    }
    cords.push(y)
    cords.push(x)
    movescalc = moves*2
    for (b = 0; b < 1+score*2; b+= 2)
    {
        document.querySelector(".div" + cords[(movescalc - 2) - b] + cords[(movescalc - 1) - b]).style.background = "green"

        // console.log("Y: " + cords[(movescalc - 2) - b])
        // console.log("X: " + cords[(movescalc - 1) - b])
        // console.log(cords)
    }


    document.querySelector(".div" + y + x).style.background = "green"
    document.querySelector(".div" + y + x).style.backgroundImage = "url('ouczyska.png')"
    document.querySelector(".div" + y + x).style.backgroundSize = "cover"
    done = false
}

function spawnapple()
{

    applex = (Math.round(Math.random()*4)) + 1
    appley = (Math.round(Math.random()*4)) + 1

    document.querySelector(".div" + appley + applex).style.background = "red"
}


        // if(moves > 1 && cords[(movescalc - 2) - b] == y && cords[(movescalc - 1) - b] == x && done == false)
        // {
        //     alert("You've hit the snake")
        //     done = true
        // }