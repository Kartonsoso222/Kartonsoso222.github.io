let przed_szyfrem = prompt("Podaj hasło")
let przesuniecie = Number(prompt("Podaj przesunięcie"))
let wpisano = false
let nie_rozpoznano = false
let alfabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","X","Y","Z"]


for (i=0; i<przed_szyfrem.length; i++)
{
    wpisano = false
        for (j=0; j<alfabet.length;j++)
        {
                if (przed_szyfrem[i] == alfabet[j])
                {
                    if(j+przesuniecie<alfabet.length)
                    {
                        document.write(alfabet[j+przesuniecie])
                    }
                    else
                    {
                        document.write(alfabet[j+przesuniecie-alfabet.length])
                    }
                    wpisano = true
                } 
        }

        if(!wpisano)
        {
            document.write(przed_szyfrem[i])
        }
    
}