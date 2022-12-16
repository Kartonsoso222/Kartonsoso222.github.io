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
const info = document.querySelector(".info")
const div2 = document.querySelector(".div2")
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
let toggled3 = false;


// Nasłuchwianie na kliknięcia - kluczowa część kodu odpowiadająca za działanie klawiszy
//'keydown' sprawia że przeglądarka wykrywa każde wciśnięcie klawisza na klawiaturze
// zmienna e przechowuje dane wciśniętego klawisza
// e.key wyciąga ze zmiennej e to jaki klawisz na klawiaturze został wciśnięty 
addEventListener("keydown", (e)=>{
    // Ten warunek sprawdza czy wciśnięty klawisz to w, aby wywołać odpowiednią funkcje
    if (e.key=== 'w')
    {
        // Wywołuje niżej zdefiniowaną przezemnie funkcje mforward
        mforward()
    }
    // Poniższe warunki else if() robią to samo co poprzedni, tylko dla innych klawiszy i wywołują funkcje ruchu w inną stronę
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
    // e.key === ' ' puste miejsce oznacza spację - warunek sprawdza czy wciśnięty przycisk to spacja
    else if (e.key === ' ')
    {
        tempo()
    }
})
addEventListener("keydown", (a)=>{
    if (a.key === 'Enter')
    {
    if (!toggled3)
    {
        //toggled3 = true;
        starting()
    }
}
})
//Ruch w przód - zmienna d1top oznacza margines górny - ruch postaci w tej grze opiera się nie zamieniu wartości marginesów
//Funkcja zminiejsza wartość d1top o obecną szybkość, i ustawia margines górny diva na wartość tej zmiennej przesuwając go w górę
function mforward()
{
//Zmienia wartość zmiennej o obecną szybkość 
    d1top -= speed;
//Wywołuje funkcje która nie pozwala divowi wykroczyć poza jego obszar
how_far_from_border()
//Zmienia wielkość marginesu o obecną wartość zmiennej
    div1.style.marginTop = d1top + 'px'
}
function mleft()
{
    d1left -= speed;
    how_far_from_border()
    div1.style.marginLeft = d1left + 'px';
}
function mback()
{
    d1top += speed;
    how_far_from_border()
    div1.style.marginTop = d1top + 'px';
}
function mright()
{
    d1left += speed;
    how_far_from_border()
    div1.style.marginLeft = d1left + 'px';
}

function how_far_from_border()
{
    if (d1top < 0)
    {
        d1top =0;
    }
    else if (d1top > 300)
    {
        d1top = 300
    }

    if (d1left < 0)
    {
        d1left = 0;
    }
    else if (d1left > main.clientWidth - 100)
    {
        d1left = main.clientWidth - 100;
    }
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



function starting()
{
    info.style.display = 'none';
    // timer()
     starting2()
}

function starting2()
{
    let positionY = (Math.random())*1000
    let positionX = (Math.random())*1000    
        while (positionY > 300)
        {
            positionY -=300;
        }
        if (positionY > 250)
        {
            positionY =- 50;
        }
        if (positionY < 10)
        {
            positionY += 100;
        }
        while (positionX > main.clientWidth)
        {
            positionX -=main.clientWidth;
        }
        if (positionX > main.clientWidth-50)
        {
            positionX =- 50;
        }  
    
    div2.style.display = "block";
    div2.style.marginTop = positionY + "px";
    div2.style.marginLeft = positionX + "px";
}