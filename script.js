const menu = document.querySelector(".menu")
const info = document.querySelector(".info")
const info2 = document.querySelector(".info2")
const pht = document.querySelector(".pht")
const pht2 = document.querySelector(".pht2")
let scroll = 0
function menu_hide()
{
    if (scrollY > 25)
    {
        menu1()
        show_info1()
    }
    else if (scrollY <= 25)
    {
        menu2()
        hide_info1()
    }
    if (scrollY > 100)
    {
        setTimeout('show_info2()', 200)
    }
    else if (scrollY < 100)
    {
        hide_info2()
    }
}
function menu1()
{
    menu.style.marginLeft = menu.clientWidth*2 + 'px'
    
}
function menu2()
{
    menu.style.marginLeft = 0
}
function hide_info1()
{
    info.style.marginLeft = info.clientWidth*2 + 'px'
    pht.style.webkitTransform = 'rotate(0deg)'; 
    pht.style.mozTransform    = 'rotate(0deg)'; 
    pht.style.msTransform     = 'rotate(0deg)'; 
    pht.style.oTransform      = 'rotate(0deg)'; 
    pht.style.transform       = 'rotate(0deg)'; 
}
function show_info1()
{
    info.style.marginLeft = 0
    pht.style.webkitTransform = 'rotate(360deg)'; 
    pht.style.mozTransform    = 'rotate(360deg)'; 
    pht.style.msTransform     = 'rotate(360deg)'; 
    pht.style.oTransform      = 'rotate(360deg)'; 
    pht.style.transform       = 'rotate(360deg)'; 
}
function hide_info2()
{
    info2.style.marginLeft = -(info2.clientWidth*2) + 'px'
    pht.style.webkitTransform = 'rotate(0deg)'; 
    pht.style.mozTransform    = 'rotate(0deg)'; 
    pht.style.msTransform     = 'rotate(0deg)'; 
    pht.style.oTransform      = 'rotate(0deg)'; 
    pht.style.transform       = 'rotate(0deg)'; 
}
function show_info2()
{
    info2.style.marginLeft = 0
    pht2.style.webkitTransform = 'rotate(360deg)'; 
    pht2.style.mozTransform    = 'rotate(360deg)'; 
    pht2.style.msTransform     = 'rotate(360deg)'; 
    pht2.style.oTransform      = 'rotate(360deg)'; 
    pht2.style.transform       = 'rotate(360deg)'; 
}