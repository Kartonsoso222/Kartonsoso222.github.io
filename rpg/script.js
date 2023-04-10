const flee = document.querySelector(".flee")
const UI = document.querySelector(".UI")
const enemy = document.querySelector(".enemy")
const options = document.querySelector(".options")

let action = 0
let actions_amount = 4

let run_selected = 1
let character_selected = 0
let action_seleted = 0

let turn = 1

let enemySelected = 0
let enemiesAmount = 2

document.querySelector(".flee_list").querySelectorAll("li")[0].style.textDecoration = "underline"
document.querySelectorAll("#character")[0].style.borderBottom = "1px solid white"

addEventListener("keydown", (e)=>{
    if(e.key == 'Enter')
    {
        if(action != actions_amount && run_selected != 0)
        {
            action++
        }
        else if (run_selected == 0 && action == 0)
        {
            document.write("ran from fight")
        }
        playerAction(e)
    }
    else if (e.key == 'Escape')
    {
        if(action != 0)
        {
            action--
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
            if(action_seleted != 3)
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
    else if (e.key == 'ArrowLeft')
    {
        if(action>=2)
        {
            if(enemySelected != 0)
            {
                enemySelected--
                playerAction()
            }
        }
    }
    else if (e.key == 'ArrowRight')
    {
        if(action>=2)
        {
            if(enemySelected !=1)
            {
                enemySelected++
                playerAction()
            }
        }
    }
})

function playerAction(e)
{
    if(action==0)
    {
        options.style.display = "none"
        flee.style.display = "block"
    }
    else if(action==1)
    {
        flee.style.display = "none"
        options.style.display = "flex"
        underlines_clear()
        underlines_select()
    }
    else if(action>=2)
    {
        selected_clear()
        document.querySelectorAll("#enemyunit")[enemySelected].style.background = "white"
        if(action>=3)
        {
            if(e.key == 'Enter')
            {
                testPlayer1.move(enemySelected)
                endPlayerTurn()
            }
        }
       while (turn%2==0)
       {
           enemiesMove()
            turn++
       } 
    }
}

function enemiesMove()
{
    selected_clear()
    for(i=0; i<enemies.length; i++)
    {
        enemies[i].move()
    }
}

function endPlayerTurn()
{
    action = 0
    turn++
    selected_clear()
    playerAction()
}

// combat
let testPlayer1 =
{
    name: "Character1",
    Maxhp: 150,
    hp: 150,
    dmg: 20,
    agility: 10,
    move: function attack(target){
        let damageVar = Math.floor(Math.random()*this.dmg/2)
        if(Math.round(Math.random())==1)
        {
            hpDiff = this.dmg + damageVar
        }
        else
        {
            hpDiff = this.dmg - damageVar                            
        }
            enemies[target].hp -= hpDiff
            console.log(enemies[target].name + " Took " + hpDiff + " Damage")
        if(enemies[target].hp <= 0)
        {
            document.querySelectorAll("#enemyunit")[target].style.display = "none"
            enemies[target].status = "dead"
            enemiesAmount--
            enemySelected = enemiesAmount
        }
        document.querySelectorAll(".testHP")[target].innerHTML = enemies[target].hp
    }
}

let enemies = [
        {
                name: 'Bob',
                hp: 100,
                dmg: 10,
                agility: 5,
                status: "alive",
                move: function attack(){
                    if(this.status == "alive")
                    {
                        let damageVar = Math.floor(Math.random()*this.dmg/2)
                        if(Math.round(Math.random())==1)
                        {
                            hpDiff = this.dmg + damageVar
                        }
                        else
                        {
                            hpDiff = this.dmg - damageVar                            
                        }
                            testPlayer1.hp -= hpDiff
                            console.log("Player took " + hpDiff + "damage")
                        if(testPlayer1.hp>0)
                        {
                            document.querySelector(".testHP2").innerHTML = testPlayer1.hp
                            document.querySelector(".HPbar").style.width = (testPlayer1.hp/testPlayer1.Maxhp)*100 + "%"
                        }
                        else 
                        {
                            testPlayer1.status = "dead"
                            document.write("You lost")
                        }
                    }
                }
        },
        {
                name: 'Janol',
                hp: 100,
                dmg: 10,
                agility: 5,
                status: "alive",
                move: function attack(){
                    if(this.status == "alive")
                    {
                        let damageVar = Math.floor(Math.random()*this.dmg/2)
                        if(Math.round(Math.random())==1)
                        {
                            hpDiff = this.dmg + damageVar
                        }
                        else
                        {
                            hpDiff = this.dmg - damageVar                            
                        }
                            testPlayer1.hp -= hpDiff
                            console.log("Player took " + hpDiff + "damage")
                        if(testPlayer1.hp>0)
                        {
                            document.querySelector(".testHP2").innerHTML = testPlayer1.hp
                        }
                        else 
                        {
                            testPlayer1.status = "dead"
                            document.write("You lost")
                        }
                    }
                }
        }
]
// Gówno do zmian graficznych - nie dotykać bez wyraźniej potrzeby
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
function selected_clear()
{
    for(i=0; i< enemiesAmount; i++)
    {
        document.querySelectorAll("#enemyunit")[i].style.background = "none"            
    }
}