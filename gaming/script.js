//Definiowanie elemetnów HTML jako stałe const js'a pozwala odnieść się do nich w 
// wygodniejszy sposób - nie muszę pisać "document.querySelector(".main")" za każdym razem
//tylko nazwastałej.reszta kodu

//querySelector jest w uproszczeniu tym samym co getEelmentbyId lub getElementsByClassName
//Ale możemy się odnieść nim do klasy lub ID elementu na raz jedną komendą 
//To czy odnosimy się do klasy czy do ID zaznaczamy przez dodanie:
// W przypadku klasy .
// W przypadku ID # 
//Przed nazwą diva do którego się odnosimy 

const main = document.querySelector(".main")
const div1 = document.querySelector(".div1")
const charged = document.querySelector(".charged")
//Definiowanie zmiennych na początku kodu poprawia jego czytelność, oraz
//sprawia że visual podpowiada nam nazwę zmiennej dzięki czemu możemy pisać efektywniej
let d1top = 0;
let d1left = 0;

//Zmienna speed mówi o ile pixeli przesuwa się nasza postać, domyślna wartość to 10
//Przy przyspieszeniu wartość zmienia się do 50
let speed = 10;


let chargebar = 100;
let active = false;
let toggled = false;
let toggled2 = false;
//Ruch w przód - zmienna d1top oznacza margines górny - ruch postaci w tej grze opiera się nie zamieniu wartości marginesów
//Funkcja zminiejsza wartość d1top o obecną szybkość, i ustawia margines górny diva na wartość tej zmiennej przesuwając go w górę
function mforward()
{
//Zmienia wartość zmiennej 
    d1top -= speed;
//Zmienia wielkość marginesu 
    div1.style.marginTop = d1top + 'px'
}
function mleft()
{
    d1left -= speed;
    div1.style.marginLeft = d1left + 'px';
}
function mback()
{
    d1top += speed;
    div1.style.marginTop = d1top + 'px';
}
function mright()
{
    d1left += speed;
    div1.style.marginLeft = d1left + 'px';
}
function tempo()
{  
    if (!toggled2)
    {
        discharge()
        chargebarcheck1()
        toggled2 = true
    }
    setTimeout('tempo2()', 50)
}
// Miałem problem z while() z czego wynikło istnienie poniższych abominacji

function chargebarcheck1()
{
    if (chargebar > 0)
    {
        active = true;
    }
    else 
    {
        active = false;
    }
    setTimeout('chargebarcheck2()', 10)
}
function chargebarcheck2()
{
    setTimeout('chargebarcheck1()', 10)
}

function discharge()
{
    if (!toggled)
    {
        toggled = true;
        discharge1()
    }
}
function discharge1()
{
    chargebar -= 20;
    if (chargebar <0)
    {
        chargebar =0
    }
    else if ( chargebar > 100)
    {
        chargebar = 100
    }
    charged.style.width = chargebar + "%";
    setTimeout('discharge2()', 500)
}
function discharge2()
{
    setTimeout('discharge1()', 500)
}
function tempo2()
{
    if (active)
    {
        speed = 50;
    }
    else
    {
        speed = 10;

    }
    setTimeout('tempo3()', 10)
}
function tempo3()
{
    setTimeout('tempo2()', 10)
}
// Nasłuchwianie na kliknięcia - kluczowa część kodu odpowiadająca za działanie klawiszy
addEventListener("keydown", (e)=>{
    if (e.key=== 'w')
    {
        mforward()
    }
    else if (e.key === 'a')
    {
        mleft()
    }
    else if (e.key === 's')
    {
        mback()
    }
    else if (e.key === 'd')
    {
        mright()
    }
    else if (e.key === ' ')
    {
        tempo()
    }
})
