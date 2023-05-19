const slider_button_left = document.querySelector(".arr1")
const slider_button_right = document.querySelector(".arr2")
const product = document.querySelector("#product")
const product2 = document.querySelector("#product2")
const balls = document.querySelector(".balls")
const img_container = document.querySelector(".img-container")
const img_container2 = document.querySelector(".img-container2")
const slider_main = document.querySelector(".slider-main")
const product_name = document.querySelector(".slider_product_name")
const price = document.querySelector(".slider_product_price")

let slider_content = ["promocja1.png", "promocja2.png", "promocja3.png"]
let slider_desc = ["Tea", "Matcha", "Bubble tea"]
let slider_price = ["10.00zł", "15.00zł", "20.00zł"]
let option = 0
let counter = 2

let backgrounds = ["tlo.jpg", "tlo2.jpg", "tlo3.jpg"]


function slider_background()
{
    let bacgrkoundImg = Math.floor(Math.random()*backgrounds.length)
    slider_main.style.backgroundImage = "url(" + backgrounds[bacgrkoundImg] + ")"
    console.log(bacgrkoundImg)
    setTimeout('slider_background()', 5000)
}

product_name.innerHTML = slider_desc[option]
price.innerHTML = slider_price[option]

for(i=0; i < slider_content.length; i++)
{
    balls.innerHTML += "<div class='circle'> </div>"    
}
balls_color()

slider_button_left.addEventListener("click", ()=>{
    slider(-1)
})
slider_button_right.addEventListener("click", ()=>{
    slider(1)
})





function slider(action)
{
    option = option + action
    if(option < 0) option = slider_content.length-1
    if(option > slider_content.length -1) option = 0
    product_name.innerHTML = slider_desc[option]
    price.innerHTML = slider_price[option]
    slider_swipe()
    balls_color()
}
function balls_color()
{
    for(i=0;i<slider_content.length;i++)
    {
        document.querySelectorAll(".circle")[i].style.background = "gray"
    }
    document.querySelectorAll(".circle")[option].style.background = "black"
}

function slider_swipe()
{
    if(counter%2==0)
    {
        product2.src = slider_content[option]
        img_container2.style.marginLeft = "0"
        img_container.style.marginLeft = "100%"
    }
    else
    {
        product.src = slider_content[option]
        img_container2.style.marginLeft = "100%"
        img_container.style.marginLeft = "0"
    }
    counter++
}