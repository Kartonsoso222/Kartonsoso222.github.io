let slowo = prompt("Podaj słowo do 255 znaków bez spacji")
let zakodowane = " "
let sprawdzone = false
for (i=0; i<slowo.length; i++)
{
    if(slowo[i]== " " )
    {
        document.write("Słowo nie powinno zawierać spacji")
    }
    else if (slowo.length>255)
    {
        document.write("Słowo za długie")
    }
    else if (slowo.length%2 == 0 && !sprawdzone)
    {
        liczenie(true)
        sprawdzone = true
    }
    else if(slowo.length%2 != 0 && !sprawdzone)
    {
        liczenie(false)
        sprawdzone = true
    }
}

function liczenie(parzyste)
{
    if (parzyste)
    {
        for(i=0; i<slowo.length; i+=2)
        {
            zakodowane += slowo[i+1]
            zakodowane += slowo[i]
        }
        document.write(zakodowane)
    }
    else
    {
        for(i=0; i<slowo.length-1; i+=2)
        {
            zakodowane += slowo[i+1]
            zakodowane += slowo[i]
        }
        zakodowane += slowo[slowo.length-1]
        document.write(zakodowane)
    }
}