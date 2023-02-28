let x = 1
let y = 1
let applex = Math.round(Math.random()*3)
let appley = Math.round(Math.random()*3)
if(applex == 0)
{
    applex++
}
if (appley == 0)
{
    appley ++
}
let score = 0
document.querySelector(".div" + y + x).style.background = "green"


addEventListener("keydown",(e)=>{
    if(e.key == 'a')
    {
        moveleft()
    }
    else if (e.key == 'w')
    {
        moveforw()
    }
    else if (e.key == 's')
    {
        moveback()
    }
    else if (e.key == 'd')
    {
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
}
function moveforw()
{
    if(y > 1)
    {
        y--
        clearmap()
    }
}
function moveback()
{
    if(y < 3)
    {
        y++
        clearmap()
    }
}
function moveright()
{
    if(x < 3)
    {
        x++
        clearmap()
    }
}

function clearmap()
{
    for (i=0; i<9; i++)
    {
        document.querySelectorAll("#div")[i].style.background = "white"
    }

    document.querySelector(".div" + y + x).style.background = "green"
    document.querySelector(".div" + appley + applex).style.background = "red"
    document.querySelector(".div" + y + x).style.background = "green"
    while(y==appley && x==applex)
    {
        spawnapple()
        score++
    }
}

function spawnapple()
{

    applex = Math.round(Math.random()*3)
    appley = Math.round(Math.random()*3)
    if(applex == 0)
    {
        applex++
    }
    if (appley == 0)
    {
        appley ++
    }
    document.querySelector(".div" + appley + applex).style.background = "red"
}