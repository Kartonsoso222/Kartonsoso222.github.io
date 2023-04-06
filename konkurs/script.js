let pobrana = prompt("Podaj liczbę do 5 cyfr")
let silnia1 = 0
let wynik = 0
for (i=0; i<pobrana.length; i++)
{
    silnia1 = pobrana[i]
    if(pobrana[i]> 1)
    {
        for (j=pobrana[i]-1; j>0; j--)
        {
            silnia1 *= j
        }
    }
    wynik += silnia1
}
document.write(wynik)