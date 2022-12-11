const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

//Easy mode
btn1.addEventListener("click", () =>{
    document.querySelector(".main").style.display = "none";
    let answer_easy = Math.ceil((Math.random())*10);
    let player_answer = prompt("Guess the number from 1 to 10 " + "Select your answer");
    document.querySelector(".main-2").style.display = "flex";
    if (answer_easy == player_answer)
    {
        document.querySelector(".main-2").innerHTML = "Correct answer - you win"
    }
    else 
    {
        document.querySelector(".main-2").innerHTML = "You lose - the correct answer is: " + answer_easy;
    }
})
btn2.addEventListener("click", () =>{
    document.querySelector(".main").style.display = "none";
    let answer_medium = Math.ceil((Math.random())*100);
    alert("You get to guess three times, only one anwer is correct")
    let player_answer = prompt("Guess the number from 1 to 100 " + "Select your first of three answers");
    let player_answer2 = prompt("Guess the number from 1 to 100 " + "Select your second of three answers");
    let player_answer3 = prompt("Guess the number from 1 to 100 "  + "Select your third of three answers");
    answers_medium = []
    answers_medium.push(player_answer, player_answer2, player_answer3)
    document.querySelector(".main-2").style.display = "flex";
    if (answer_medium == player_answer || answer_medium == player_answer2|| answer_medium == player_answer3)
    {
        document.querySelector(".main-2").innerHTML = "Correct answer - you win" + + "Your answers: " + answers_medium + "<br>" + "Correct answer: " + answer_medium;
    }
    else 
    {
        document.querySelector(".main-2").innerHTML = "You lose - the correct answer is: " + answer_medium + "<br>" + "Your answers: " + answers_medium;
    }
})
btn3.addEventListener("click", () =>{
    document.querySelector(".main").style.display = "none";
    let answer_hard = ((Math.random())*100).toFixed(1);
    alert("You get to guess five times, only one anwer is correct, the numbers always have one number after the decimal point, for example: " + ((Math.random())*100).toFixed(1))
    let player_answer = prompt("Guess the number from 1 to 100 " + "Select your first of three answers");
    let player_answer2 = prompt("Guess the number from 1 to 100 " + "Select your second of three answers");
    let player_answer3 = prompt("Guess the number from 1 to 100 "  + "Select your third of three answers");
    let player_answer4 = prompt("Guess the number from 1 to 100 "  + "Select your third of three answers");
    let player_answer5 = prompt("Guess the number from 1 to 100 "  + "Select your third of three answers");
    answers_hard = []
    answers_hard.push(player_answer, player_answer2, player_answer3, player_answer4, player_answer5)
    document.querySelector(".main-2").style.display = "flex";
    if (answer_hard == player_answer || answer_hard == player_answer2|| answer_hard == player_answer3|| answer_hard == player_answer4|| answer_hard == player_answer5)
    {
        document.querySelector(".main-2").innerHTML = "Correct answer - you win" + + "Your answers: " + answers_hard + "<br>" + "Correct answer: " + answer_hard;
    }
    else 
    {
        document.querySelector(".main-2").innerHTML = "You lose - the correct answer is: " + answer_hard + "<br>" + "Your answers: " + answers_hard;
    }
})