//Stałe zdefiniowane dla późniejszego odniesienia i zmniejszenia ilosci kodu
const d1 = document.querySelector("#div1")
const d2 = document.querySelector("#div2")
const d3 = document.querySelector("#div3")
const d4 = document.querySelector("#div4")
const d5 = document.querySelector("#div5")
const d6 = document.querySelector("#div6")
const d7 = document.querySelector("#div7")
const d8 = document.querySelector("#div8")
const d9 = document.querySelector("#div9")

// zmienne do gry
let turn = 1;
let player = "x";
let xscore = 0;
let Oscore = 0;

//tablica od wyników

let files = [false, false, false, false, false, false, false, false, false]

// Funkcja od wykonywania ruchu
function changefile(filenumber)
{
    turn++;
    // Sprawdza czyja jest obecnie tura - jeśli numer tury jest parzysty jest to tura gracza X a jeśli nie jest to tura gracza O
    if(turn % 2 == 0)
    {
        player = "x"
    }
    else 
    {
        player = "O"
    }
    // Zmienia zawartość pola zależnie od obecnej tury
        document.querySelector("#div" + filenumber).innerHTML = player
    // Wyłącza możliwość kliknięcia na diva drugi raz
        document.querySelector("#div" + filenumber).style.pointerEvents = "none"
        document.querySelector("#div" + filenumber).style.background = "lightgray"
        // Ustawia pole w tablicy odpowiadające klikniętemu divowi na zaznaczone przez gracza x lub O zależnie od tury
        files[filenumber-1] = player
        // Wywołuje funkcję sprawdzającą czy gra partia może zostać zakończona
        wincondition()
}
//Wywołuje funkcje wykonywania ruchu przy odpowiednim divie po kliknięciu
d1.addEventListener("click", ()=>{
    changefile(1)
})
d2.addEventListener("click", ()=>{
    changefile(2)
})
d3.addEventListener("click", ()=>{
    changefile(3)
})
d4.addEventListener("click", ()=>{
    changefile(4)
})
d5.addEventListener("click", ()=>{
    changefile(5)
})
d6.addEventListener("click", ()=>{
    changefile(6)
})
d7.addEventListener("click", ()=>{
    changefile(7)
})
d8.addEventListener("click", ()=>{
    changefile(8)
})
d9.addEventListener("click", ()=>{
    changefile(9)
})
// W kółko i krzyżyk można wygrać jedynie na 8 sposobów lub zremisować - funkcja sprawdza czy któraś z tych ewentualności nie jest
// prawdziwa dla żadnego z graczy, jeśli jest wywołuje funkcje odpowiadającą za skończenie gry
function wincondition()
{
    if (files[0] == "x" && files[1] == "x" && files[2] == "x")
    {
        winx()    }
    else if (files[3] == "x" && files[4] == "x" && files[5] == "x")
    {
        winx()    }
    else if (files[6] == "x" && files[7] == "x" && files[8] == "x")
    {
        winx()    }
    else if (files[0] == "x" && files[3] == "x" && files[6] == "x")
    {
        winx()    }
    else if (files[1] == "x" && files[4] == "x" && files[7] == "x")
    {
        winx()    }
    else if (files[2] == "x" && files[5] == "x" && files[8] == "x")
    {
        winx()    }
    else if (files[0] == "x" && files[4] == "x" && files[8] == "x")
    {
        winx()    }
    else if (files[2] == "x" && files[4] == "x" && files[6] == "x")
    {
        winx()
    }

    if (files[0] == "O" && files[1] == "O" && files[2] == "O")
    {
        wino()    }
    else if (files[3] == "O" && files[4] == "O" && files[5] == "O")
    {
        wino()    }
    else if (files[6] == "O" && files[7] == "O" && files[8] == "O")
    {
        wino()    }
    else if (files[0] == "O" && files[3] == "O" && files[6] == "O")
    {
        wino()   }
    else if (files[1] == "O" && files[4] == "O" && files[7] == "O")
    {
        wino()   }
    else if (files[2] == "O" && files[5] == "O" && files[8] == "O")
    {
        wino()    }
    else if (files[0] == "O" && files[4] == "O" && files[8] == "O")
    {
        wino()    }
    else if (files[2] == "O" && files[4] == "O" && files[6] == "O")
    {
        wino()
    }
    // Zmienna turn oznacza ilość ruchów i domyślnie ustawiłem ją na 1, co ruch zwiększa się o 1 - jeśli dobije do 10 wywołuje remis z powodu braku możliwości ruchu
    // Jeśli wykonamy 9 ruchów i partia nie zostanie wygrana do tego czasu oznacza to że została zakończona remisem
    if (turn == 10)
    {
        draw()
    }
}



// Przyznaje wygraną graczowi x
function winx()
{
    // Dodaje punkt graczowi x
    xscore++
    //Wypisuje wynik gracza x
    document.querySelector(".xres").innerHTML = xscore
    // Ustawia pola do stanu z początku rundy
    for (i=1; i <=9; i++)
    {
         document.querySelector("#div" + i).innerHTML = i
         document.querySelector("#div" + i).style.pointerEvents = "auto"
         document.querySelector("#div" + i).style.background = "white"
    }
        // Ustawia zmienne do stanu z początku rundy
    turn = 1
    player = "x"
    files = [false, false, false, false, false, false, false, false, false]
}
// Przyznaje wygraną graczowi O
function wino()
{
    Oscore++
    document.querySelector(".Ores").innerHTML = Oscore
    for (i=1; i <=9; i++)
    {
         document.querySelector("#div" + i).innerHTML = i
         document.querySelector("#div" + i).style.pointerEvents = "auto"
         document.querySelector("#div" + i).style.background = "white"
    }
    turn = 1
    player = "x"
    files = [false, false, false, false, false, false, false, false, false]
}
// Przyznaje remis
function draw()
{
    alert("draw")
    for (i=1; i <=9; i++)
    {
         document.querySelector("#div" + i).innerHTML = i
         document.querySelector("#div" + i).style.pointerEvents = "auto"
         document.querySelector("#div" + i).style.background = "white"
    }
    turn = 1
    player = "x"
    files = [false, false, false, false, false, false, false, false, false]
}