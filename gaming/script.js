//Definiowanie elemetnów HTML jako stałe const js'a pozwala odnieść się do nich w 
// wygodniejszy sposób - nie muszę pisać "document.querySelector(".main")" za każdym razem
//tylko nazwastałej.reszta kodu

//querySelector jest w uproszczeniu tym samym co getEelmentbyId lub getElementsByClassName
//Ale możemy się odnieść nim do klasy lub ID elementu na raz jedną komendą 
//To czy odnosimy się do klasy czy do ID zaznaczamy przez dodanie:
// W przypadku klasy .
// W przypadku ID # 
//Przed nazwą diva do którego się odnosimy 

const container = document.querySelector(".container")
const result = document.querySelector(".result")
const main = document.querySelector(".main")
const div1 = document.querySelector(".div1")
const energybar = document.querySelector(".energybar")
const charged = document.querySelector(".charged")
const info = document.querySelector(".info")
const div2 = document.querySelector(".div2")
const scoreb = document.querySelector(".score")
//Definiowanie zmiennych na początku kodu poprawia jego czytelność, oraz
//sprawia że visual podpowiada nam nazwę zmiennej dzięki czemu możemy pisać efektywniej
let d1top = 0
let d1left = 0
let positionY
let positionX
let score = 0
let speed_regain = 10
let gift_photo = 0

// Zmienna definiuje ile bazowo energii gracz traci na sekunde
let discharge_amount = 17

//Zmienna speed mówi o ile pixeli przesuwa się nasza postać, domyślna wartość to 10
//Przy przyspieszeniu wartość zmienia się do 50
let speed = 10


let chargebar = 100
let active = false
let toggled = false
let toggled2 = false
let toggled3 = false
let toggled4 = false


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
       // skin 
    }
    distance()
})
addEventListener("keydown", (a)=>{
    if (a.key === 'Enter')
    {
    if (!toggled3)
    {
        // Funkcja wywołuje się tylko jeden raz - zmienna toggled3 jest domyślnie ustawiona na false
        // funkjca po wywołaniu się ustawia ją na true zapobiegając wielokrotnemu wywołaniu tej samej funkcji
        // Taki sam cel mają wszystkie pozostałe zmienne toggled w tym kodzie
        toggled3 = true
        //Wywołuje funkcje starting i tempo
        starting()
        tempo()
    }
}
})

function starting()
{
    //Zmienia display diva z informacjami na none chowając go
    info.style.display = 'none'
    //Wywołuje funkcje starting 2
     starting2()
}
function starting2()
{
    // Losuje pozycje X i Y prezentu - Math random wybiera losową liczbę między 0 a 1, (np. 0.3453534325...)
    // Po pomnożeniu wyniku przez 1000 dostajemy losową liczbę między 100 a 999
     positionY = (Math.random())*1000 // Odległość od górnego marginesu
     positionX = (Math.random())*1000 // Odległość od lewego marginesu
     // Blokuje pojawienie się prezentu za górną granicą mapy - jeśli odległość od granicy jest większa niż 300, odejmuje od niej 300
        while (positionY > 300)
        {
            positionY -=300
        }
        // Odejmuje wysokość diva od jego odległości od górnejgo marginesu aby nie mógł pojawić się za nisko
        if (positionY > 250)
        {
            positionY =- 50
        }
        // Jeśli odległość od górnego marginesu jest za mała dodaje do niej 75 aby nie mógł pojawić się za wysoo
        if (positionY < 10)
        {
            positionY += 75
        }
        // Jeśli odległość od lewej granicy jest dłuższa niż szerokość mapy, odejmuje szerokość mapy od jego pozycji aby nie mógł
        // Pojawić się za bardzo w prawo
        // Działanie main.clientWidth wytłumaczyłem niżej
        while (positionX > main.clientWidth)
        {
            positionX -=main.clientWidth
        }
        // Jeśli odległość od lewej granicy jest większa niż szerokośc mapy- 50, odejmuje 50 od odległości od lewej granicy
        // 50 to szerokość diva prezentu, bez odjęcia 50 mógłby wystawać poza mapę o dokładnie swoją szerokość
        if (positionX > main.clientWidth-50)
        {
            positionX =- 50
        }  
        // Jeśli odległość od lewej jest mniejsza niż 0 zwiększa ją o szerokość diva, aby nie mógł pojawić się za bardzo po lewo
        if (positionX < 0)
        {
            positionX += 50
        }
        //Inkrementuje zmienną gift_photo - zwiększa ją o 1
        gift_photo++
        //Nie pozwala zmiennej gift_photo przekroczyć wartości 5 - tyle dodałem grafik prezentów
        if (gift_photo > 5)
        {
            gift_photo = 1
        }
        // Ustawia zdjęcie w tle diva z prezentem na następne w kolejności - zdjęcia nazywają się gift1.png, gift2.png gift3.png...
        // Dzięki czemu zdjęcia zmieniają się co podniesienie prezentu - ta funkcja też wywołuje się co podniesienie prezentu
    div2.style.backgroundImage = "url('gift" + gift_photo + ".png')"
    //Zmienia display diva z prezentem pokazując go - wcześniej był schowany
    div2.style.display = "block"
        // Ustawia margines górny i lewy prezentu na wcześniej ustaloną i zmodyfikowaną losową liczbę
    div2.style.marginTop = positionY + "px"
    div2.style.marginLeft = positionX + "px"
    // Jeśli zmienna distance (liczona niżej) jest mniejsza niż 400 wywołuje się na nowo zmieniając pozycje prezentu aby
    // Nie pojawił się on za blisko gracza
    // ( To chyba nie działa z nieznanych mi powodów)
    if (distance < 400)
    {
        starting()
    }
}


//Ruch w przód - zmienna d1top oznacza margines górny - ruch postaci w tej grze opiera się nie zamieniu wartości marginesów
//Funkcja zminiejsza wartość d1top o obecną szybkość, i ustawia margines górny diva na wartość tej zmiennej przesuwając go w górę
function mforward()
{
//Zmienia wartość zmiennej o obecną szybkość 
    d1top -= speed
//Wywołuje funkcje która nie pozwala divowi wykroczyć poza jego obszar
how_far_from_border()
//Zmienia wielkość marginesu o obecną wartość zmiennej
    div1.style.marginTop = d1top + 'px'
}
function mleft()
{
    d1left -= speed
    how_far_from_border()
    div1.style.marginLeft = d1left + 'px'
}
function mback()
{
    d1top += speed
    how_far_from_border()
    div1.style.marginTop = d1top + 'px'
}
function mright()
{
    d1left += speed
    how_far_from_border()
    div1.style.marginLeft = d1left + 'px'
}
// Funkcja sprawdza odległość od granicy mapy oraz blokuje przechodzenie przez nią
function how_far_from_border()
{
    // Sprawdza czy margines górny nie jest mniejszy niż 0, jeśli tak ustawia go na zero
    if (d1top < 0)
    {
        d1top =0
    }
    // Sprawdza czy margines górny nie jest większy niż 300 (wysokość mapy gry), jeśli tak ustawia go na 300
    else if (d1top > 300)
    {
        d1top = 300
    }
    // Sprawdza czy lewy margines nie jest mniejszy niż 0, jeśli tak ustawia go na 0
    if (d1left < 0)
    {
        d1left = 0
    }
    // Sprawdza czy margines prawy nie przekracza długości mapy - 100px, 
    // main.clientWidth pobiera długość mapy, która jest inna dla każdego monitora bo width mapy jest podane w % w CSS
    // za sprawą czego długość w pixelach różni się dla każdego, więc nie mogę jej użyć zachowując responsywność
    // Odejmuje 100px ponieważ do jest szerokość diva którym poruszamy - bez tego mógłby być za granicą mapy o max. 100 px 
    // czyli jego długość
    else if (d1left > main.clientWidth - 100)
    {
        d1left = main.clientWidth - 100
    }
}

function tempo()
{  
    if (!toggled2)
    {
        //Wywołuje funkcje discharge powodującą pasywne wyładowywanie się paska energii i funckje chargebarckeck
        //powodującą to że postać rusza się wolniej gdy nie ma energii
        discharge()
        chargebarcheck1()
        toggled2 = true
    }
    // Wywołuje funkcje tempo2 po 50 milisekundach
    setTimeout('tempo2()', 50)
}
// Miałem problem z while() z czego wynikło istnienie kilku poniższych abnormalnych rozwiązań

function chargebarcheck1()
{
        // Sprawdza czy ilość energii jest większa niż 0, jeśli nie ustawia zmienną active na false, co powoduje spowolnienie postaci
    if (chargebar > 0)
    {
        active = true
    }
    else 
    {
        active = false
    }
    // Wywołuje funkcje chargebarcheck2 po 10 milisekundach
    setTimeout('chargebarcheck2()', 10)
}
function chargebarcheck2()
{
    // Wywołuje funkcje chargebarcheck1 po 10 milisekundach, funckje zapętlają się dzięki czmeu gra co 20 milisekund
    // sprawdza ilość energii
    setTimeout('chargebarcheck1()', 10)
}

function discharge()
{
    if (!toggled)
    {
        //Blokuje możliwość wywołania się wielokrotnie, wywołuje funkcje discharge1
        toggled = true
        discharge1()
    }
}
function discharge1()
{
    // Zmienia wartość zmiennej discarge_amount przy wyższej liczbie punktów - energia spada szybciej utrudniając grę
    if (score > 50)
    {
        discharge_amount = 24
    }
    else if ( score > 75 )
    {
        discharge_amount = 27
    }
    else if ( score > 100)
    {
        discharge_amount = 32
    }
    // W przypadku gdy liczba punktów nie jest jeszcze wysoka, ustawia stratę energii na bazową ilość
    else {
        discharge_amount = 17
    }
    // Odejmuje obecną stratę energii od jej ilości
    chargebar -= discharge_amount
    //Blokuje możliwość posiadania ujemnej energii
    if (chargebar <0)
    {
        chargebar =0
    }
    //Blokuje możliwość posiadania ponad 100% energii
    else if ( chargebar > 100)
    {
        chargebar = 100
    }
    //Jeśli ilość energii wynosi 0 wywołuje funkcje finish po 3 sekudach
    if (chargebar == 0)
    {
        setTimeout('finish()', 3000)
    }
    // Zmienia szerokość paska enrgii zgodnie z jej obecną ilością
    charged.style.width = chargebar + "%"
    // Wywołuje funkcje discharge 2 po pół sekundy
    setTimeout('discharge2()', 500)
}
function discharge2()
{
    // Wywołuje funkcje discharge1 po kolejnym pół sekundy - funckje zapętlają się co sekundę
    setTimeout('discharge1()', 500)
}
function finish()
{
    // Jeśli 3 sekundy po wywołaniu funkcji finish ilość energii to dalej 0, wywołuje funckje game_over kończąc grę
    if (chargebar == 0)
    {
        if (!toggled4)
        {
            //Blokuje wywołanie funkcji wielokrotnie
            game_over()
        }
    }
}
function tempo2()
{
    //Ustawia prędkość poruszania się na 50, jeśli gracz ma więcej niż 0 energii
    //Ustawia szybkość na wyższe wartości przy wyższej ilości punktów
if (score > 50)
    {
    if (active)
    {
        // Zmienna active mówi, czy ilość energii jest większa niż 0, jeśli tak ustawia prędkość na wyższą wartość
        //jeżeli nie ustawia ją na niższą
        speed = 60
    }
    else
    {
        speed = 12

    }
}
if (score > 100)
{
        if (active)
        {
            speed = 70
        }
        else
        {
            speed = 14

        }
}
else 
{
        if (active)
        {
            speed = 50
        }
        else
        {
            speed = 10
    
        } 
}
    //Wywołuje funkcje tempo3
    setTimeout('tempo3()', 10)
}
function tempo3()
{
    //Wywołuje funkcje tempo2 zapętlając je co 20 milisekund, co tyle gra sprawdza czy musi spowolnić gracza jeśli ma 0 energii
    setTimeout('tempo2()', 10)

}


// Funkcja liczy dystans między divami
// Znając dystans między nimi możemy stwiedzić czy są na tyle blisko aby zaliczyć podniesienie prezentu
// Odległość między divami jest liczona za pomocą twierdzenia pitagorasa - a^2 + b^2 = c^2 gdzie c^2 jest bezpośrednią odległością między divami
function distance()
{

    let div1X = d1left
    let div1Y = d1top
    let div2X = positionX
    let div2Y = positionY
    let distance
    // Definiuje zmienne współrzędnych divów zgodnie z ich pozycjami wcześniej - wywołałem je drugi raz aby
    // ta część kodu była czytelniejsza
    // Definiuje również zmienną distance


    // warunki if sprawdzają 4 różne warianty twierdzenia pitagorasa
    if(div1Y > div2Y && div1X < div2X)
    {
        //Liczy długość przyprostokątnych a i b
        let edge1 = div1Y - div2Y
        let edge2 = div2X - div1X
        //Dodaje do siebie podniesione do kwadratu a i b tworząc c^2
        let sum =  Math.pow(edge1, 2) + Math.pow(edge2, 2)
        //Pierwiastkuje c^ tworząc c - dystans między divami
        distance = Math.sqrt(sum)
    }
    else if (div1Y > div2Y && div1X > div2X)
    {
        let edge1 = div1X - div2X
        let edge2 = div1Y - div2Y
        let sum =  Math.pow(edge1, 2) + Math.pow(edge2, 2)
         distance = Math.sqrt(sum)
    }
    else if (div2Y > div1Y && div2X > div1X)
    {
        let edge1 = div2X - div1X
        let edge2 = div2Y - div1Y
        let sum =  Math.pow(edge1, 2) + Math.pow(edge2, 2)
         distance = Math.sqrt(sum)
    }
    else if (div2Y > div1Y && div1X > div2X)
    {
        let edge1 = div1X - div2X
        let edge2 = div2Y - div1Y
        let sum =  Math.pow(edge1, 2) + Math.pow(edge2, 2)
         distance = Math.sqrt(sum)
    }
    if (distance < 100)
    {
        // Jeśli wyliczony dystans jest mniejszy niż 110 wywouje funkcje zmieniającą miejsce i wygląd prezentu na nowo
        starting()
        // Dodaje 1 punkt
        score ++
        // Podniesienie prezentu oddaje część energii 
        //Sprawdza czy ilość energii jest mniejsza niż 25 - jeśli tak dodaje większą ilość energii zależnie od ilości punktów
        if (chargebar < 25)
        {
            if (score > 50)
            {
            speed_regain = 20
            }
            else if (score > 75)
            {
                speed_regain = 13
            }
            else 
            {
                speed_regain = 25
            }
        }
        // Jeśli ilość energii nie jest większa niż 25 dodaje mniejszą ilość energii również zależną od ilości punktów
        else 
        {
            if (score > 50)
            {
            speed_regain = 8
            }
            else if (score > 75)
            {
                speed_regain = 6
            }
            else if (score > 100)
            {
                speed_regain = 3
            }
            else 
            {
                speed_regain = 10
            }
        }
        // Dodaje odpowiednią ilość energii do paska energii
        chargebar+= speed_regain
        // Zmienia szerokość naładowanej części paska energii zgodnie z jej ilością
        charged.style.width = chargebar + "%"
        // Zapisuje ilość punktów
        scoreb.innerHTML = "Punkty: " + score
    }
}
// Funkcja kończy grę
function game_over()
{
    toggled4 = true
    //Chowa gre i jej elementy ze strony
    container.style.display = 'none'
    scoreb.style.display = 'none'
    info.style.display = 'none'
    energybar.style.display = 'none'
    document.querySelector(".tree3").style.display = 'none'
    // Pokazuje ekran wyniku i grafiki
    result.style.display = 'block'
    document.querySelector(".tree").style.display = 'block'
    document.querySelector(".tree2").style.display = 'block'
    // Wypisuje wynik
    result.innerHTML = "Koniec gry ! " + '<br>' + "Końcowa liczba punktów: " +score + '<br>' + "Wesołych Świąt!"
}