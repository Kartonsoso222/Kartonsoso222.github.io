const menu = document.querySelector(".menu")
const info = document.querySelector(".info")

let scroll = 0;
function menu_hide()
{
    console.log(scrollY)
    if (scrollY > 25)
    {
        menu1()
        desc2()
    }
    else if (scrollY <= 25)
    {
        menu2()
        desc1()
    }
}
function menu1()
{
    menu.style.marginLeft = menu.clientWidth*2 + 'px'
    
}
function menu2()
{
    menu.style.marginLeft = 0;
}
function desc1()
{
    info.style.marginLeft = info.clientWidth*2 + 'px'
}
function desc2()
{
    info.style.marginLeft = 0;
}