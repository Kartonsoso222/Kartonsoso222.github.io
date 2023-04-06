let ciag = prompt("Podaj ciąg znaków")
let obecny
let dlugosc = 1
let max = 0
let maxl 

for (i=0; i < ciag.length; i++)
{
    obecny = ciag[i]
    if(obecny == ciag[i+1])
    {
        dlugosc ++
        if (dlugosc > max)
        {
            max = dlugosc
            maxl = ciag[i]
        }
    }
    else if (obecny != ciag[i+1])
    {
        dlugosc = 1
    }
}

document.write(max + maxl)