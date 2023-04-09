const run = document.querySelector(".run")
const default1 = document.querySelector(".default1")
let action = 0
let actions_amount = 1

let run_selected = 1
let character_selected = 0
let action_seleted = 0

document.querySelector(".flee_list").querySelectorAll("li")[0].style.textDecoration = "underline"


addEventListener("keydown", (e)=>{
    if(e.key == 'Enter')
    {
        if(action != actions_amount && run_selected != 0)
        {
            action++
            if (action == 1)
            {
                document.querySelectorAll(".character_default")[0].style.borderBottom = "1px solid white"
            }
        }
        else if (run_selected == 0 && action == 0)
        {
            document.write("ran")
        }

        
        playerAction()
    }
    else if (e.key == 'Escape')
    {
        if(action != 0)
        {
            action--
            if (action == 0)
            {
                document.querySelectorAll(".character_flee")[0].style.borderBottom = "1px solid white"
            }
        }
        playerAction()
    }
    else if (e.key == 'ArrowDown')
    {
        if(action==0)
        {
            if(run_selected == 1)
            {
                run_selected--
                fight_or_flight()
            }
        }
        else if (action==1)
        {
            if(action_seleted != 4)
            {
                action_seleted++
                playerAction()
            }
        }
    }
    else if (e.key == 'ArrowUp')
    {
        if(action==0)
        {
            if(run_selected == 0)
            {
                run_selected++
                fight_or_flight()
            }
        }
        else if (action==1)
        {
            if(action_seleted != 0)
            {
                action_seleted--
                playerAction()
            }
        }
    }
})

function playerAction()
{
    if(action==0)
    {
        hide()
        run.style.display = "block"
    }
    if(action==1)
    {
        hide()
        default1.style.display = "block"
        if(action_seleted==0)
            {
                // attack()
                underlines_clear()
                underlines_select()
            }
            else if(action_seleted==1)
            {
                // skills()
                underlines_clear()
                underlines_select()
            }
            else if(action_seleted==2)
            {
                // guard()
                underlines_clear()
                underlines_select()
            }
            else if(action_seleted==3)
            {
                // items()
                underlines_clear()
                underlines_select()
            }
    }
}
function hide()
{
    run.style.display = "none"
    default1.style.display = "none"
}

function fight_or_flight()
{
    if(run_selected == 0)
    {
        document.querySelector(".flee_list").querySelectorAll("li")[1].style.textDecoration = "underline"
        document.querySelector(".flee_list").querySelectorAll("li")[0].style.textDecoration = "none"
    }
    if(run_selected == 1)
    {
        document.querySelector(".flee_list").querySelectorAll("li")[0].style.textDecoration = "underline"
        document.querySelector(".flee_list").querySelectorAll("li")[1].style.textDecoration = "none"
    }
}
function underlines_clear()
{
    for(i=0; i<4; i++)
    {
        document.querySelector(".options").querySelectorAll(".option")[i].style.textDecoration = "none"
    }
}
function underlines_select()
{
    document.querySelector(".options").querySelectorAll(".option")[action_seleted].style.textDecoration = "underline"
}