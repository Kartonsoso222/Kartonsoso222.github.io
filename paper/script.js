const p1c1 = document.querySelector(".rock")
const p1c2 = document.querySelector(".paper")
const p1c3 = document.querySelector(".scizzors")

const p2c1 = document.querySelector(".p2c1")
const p2c2 = document.querySelector(".p2c2")
const p2c3 = document.querySelector(".p2c3")    

let cartpickedp2 = false
let botmoves = ["rock", "paper", "scizzors"]
let botchoice = false

let p1score = 0
let p2score = 0


p2c1.addEventListener("click", ()=>{
    cartmove("p2c1", "p2c2", "p2c3")
})
p2c2.addEventListener("click", ()=>{
    cartmove("p2c2", "p2c1", "p2c3")
})
p2c3.addEventListener("click", ()=>{
    cartmove("p2c3", "p2c1", "p2c2")
})

function cartmove(cartchosen, cart1, cart2)
{
    document.querySelector("." + cartchosen).style.pointerEvents = "none"
    document.querySelector("." + cart1).style.pointerEvents = "none"
    document.querySelector("." + cart2).style.pointerEvents = "none"
    document.querySelector("." + cartchosen).style.marginBottom = "10%"
    document.querySelector("." + cartchosen).style.transform = "rotate(360deg)"
    switch (cartchosen){
        case "p2c1" : 
        cartpickedp2 = "rock"
        break
        case "p2c2" :
        cartpickedp2 = "paper"
        break
        case "p2c3" :
        cartpickedp2 = "scizzors"
        break
    }
    botmove()
}

function botmove()
{
    botchoice = botmoves[Math.floor(Math.random()*botmoves.length)]
    document.querySelector("." + botchoice).style.marginTop = "10%"
    document.querySelector("." + botchoice).style.transform = "rotate(360deg)"
    document.querySelector("." + botchoice).style.zIndex = "3"

    setTimeout('wincon()', 500)
}

function wincon()
{
    if (botchoice == cartpickedp2)
    {
        alert("Draw")
    }
    else if (botchoice == "rock" && cartpickedp2 == "paper")
    {
        alert("You win")
        p2score++
    }
    else if (botchoice == "rock" && cartpickedp2 == "scizzors")
    {
        alert("You lose")
        p1score++
    }
    else if (botchoice == "paper" && cartpickedp2 == "scizzors")
    {
        alert("You win")
        p2score++
    }
    else if (botchoice == "paper" && cartpickedp2 == "rock")
    {
        alert("You lose")
        p1score++
    }
    else if (botchoice == "scizzors" && cartpickedp2 == "paper")
    {
        alert("You lose")
        p1score++
    }
    else if (botchoice == "scizzors" && cartpickedp2 == "rock")
    {
        alert("You win")
        p2score++
    }

    restartround()
}

function restartround()
{
    botchoice = false
    cartpickedp2 = false

    p2c1.style.marginBottom = "-4%"
    p2c1.style.transform = "rotate(340deg)"
    p2c1.style.pointerEvents = "auto"

    p2c2.style.marginBottom = "-2%"
    p2c2.style.transform = "rotate(0deg)"
    p2c2.style.pointerEvents = "auto"

    p2c3.style.marginBottom = "-4%"
    p2c3.style.transform = "rotate(20deg)"
    p2c3.style.pointerEvents = "auto"

    p1c1.style.marginTop = "-4%"
    p1c1.style.transform = "rotate(200deg)"
    p1c1.style.pointerEvents = "auto"

    p1c2.style.marginTop = "-2%"
    p1c2.style.transform = "rotate(180deg)"
    p1c2.style.pointerEvents = "auto"

    p1c3.style.marginTop = "-4%"
    p1c3.style.transform = "rotate(160deg)"
    p1c3.style.pointerEvents = "auto"

    document.querySelector(".botp").innerHTML = p1score;
    document.querySelector(".playerp").innerHTML = p2score;
}