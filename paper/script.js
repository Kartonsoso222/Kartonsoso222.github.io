const p1c1 = document.querySelector(".p1c1")
const p1c2 = document.querySelector(".p1c2")
const p1c3 = document.querySelector(".p1c3")

const p2c1 = document.querySelector(".p2c1")
const p2c2 = document.querySelector(".p2c2")
const p2c3 = document.querySelector(".p2c3")    

let cartpickedp2 = false;
let botmoves = ["rock", "paper", "scizzors"]
let botchoice = false;

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
    }
    else if (botchoice == "rock" && cartpickedp2 == "scizzors")
    {
        alert("You lose")
    }
    else if (botchoice == "paper" && cartpickedp2 == "scizzors")
    {
        alert("You win")
    }
    else if (botchoice == "paper" && cartpickedp2 == "rock")
    {
        alert("You lose")
    }
    else if (botchoice == "scizzors" && cartpickedp2 == "paper")
    {
        alert("You lose")
    }
    else if (botchoice == "scizzors" && cartpickedp2 == "rock")
    {
        alert("You win")
    }
}