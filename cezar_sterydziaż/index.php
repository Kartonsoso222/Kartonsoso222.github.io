<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Szyfrowanie</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
                <div class="box1">
                        <h1>Tworzenie szyfru</h1>
                        <form method="post">
                        Podaj nazwę swojego szyfru<input type="text" name="nazwa" id=""> <br> <br>   
                        <input type="submit" value="Prześlij" name="Przesylanie">
                        </form>

                <?php
                    $alfabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","x","y","z"];
                    $klucz = "";
                    if (array_key_exists('Przesylanie', $_POST))
                    {
                        if(!empty($_POST['nazwa']))
                        {
                            $nazwa = $_POST['nazwa'];
                            for ($i=0;$i<3;$i++)
                            {
                                $klucz1 = rand(0,sizeof($alfabet));
                                $klucz = $klucz.strval($klucz1);
                            }
                            $conn = mysqli_connect('localhost', 'root', '', 'szyfry') or die ("bład");
                            $que = mysqli_query($conn, "INSERT INTO `szyfry`(`nazwa`, `klucz`) VALUES ('$nazwa', '$klucz')");
                        }
                        else
                        {
                            echo "Wypełnij pole";
                        }
                    }
                    
                ?>
                </div>
                <div class="box2">
                        <h1>Kodowanie wiadomości</h2>
                        <form method="post">
                            Podaj nazwę wcześniej stworzonego szyfru <input type="text" name="input_nazwy" id=""> <br>
                            Podaj wiadomość do zaszyfrowania <input type="text" name="wiadomosc" id=""> <br>
                            <input type="submit" value="Zaszyfruj" name="Szyfrowanie">
                        </form>
                    <?php
                    if (array_key_exists('Szyfrowanie', $_POST))
                    {
                        if(!empty($_POST['wiadomosc']) && !empty($_POST['input_nazwy']))
                        {
                            $nazwa = $_POST['input_nazwy'];
                            $tresc = $_POST['wiadomosc'];
                            $wynik = "";
                            $wpisano = false;
                            $conn = mysqli_connect('localhost', 'root', '', 'szyfry') or die ("bład");
                            $que = mysqli_query($conn, "SELECT szyfry.nazwa, szyfry.klucz FROM szyfry WHERE szyfry.nazwa = '$nazwa'");
                            if (mysqli_num_rows($que)>0)
                            {
                                while ($selected = mysqli_fetch_array($que))
                                {
                                    $klucz = $selected[1];
                                    $alfabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","x","y","z"];
                                    $index = 0;
                                    for ($i=0; $i<strlen($tresc); $i++)
                                        {
                                            $wpisano = false;
                                                for ($j=0; $j<sizeof($alfabet);$j++)
                                                {
                                                        if ($tresc[$i] == $alfabet[$j])
                                                        {
                                                            if($j+($klucz[$index])<sizeof($alfabet))
                                                            {
                                                                echo $alfabet[$j+$klucz[$index]];
                                                            }
                                                            else
                                                            {
                                                                echo $alfabet[$j+$klucz[$index]-sizeof($alfabet)];
                                                            }
                                                            $wpisano = true;
                                                        } 
                                                }
                                            if($index+1 < strlen($klucz))
                                            {
                                                $index++;
                                            }
                                            else
                                            {
                                                $index = 1;
                                            }
                                            if($wpisano==false)
                                            {
                                                echo $tresc[$i];
                                            }                
                                        }
                                }   
                            }

                            else
                            {
                                echo "Nie znaleziono hasła";
                            }
                        }
                        else
                        {
                            echo "<h1>Wypełnij wszystkie pola</h1>";
                        }
                    }
                ?>
                </div>
                <div class="box3">
                        <h1>Rozkodowywanie wiadomości</h1>
                        <form method="post">
                            Podaj nazwę szyfru z którego chcesz rozkodować wiadomość <br> <input type="text" name="nazwa" id=""> <br>
                            Podaj zaszyfrowaną wiadomość <input type="text" name="zaszyfrowana" id=""> <br>
                            <input type="submit" value="Rozkoduj" name="Rozkodowywanie">
                        </form>
                    <?php

                        if (array_key_exists('Rozkodowywanie', $_POST))
                        {
                            if(!empty($_POST['nazwa']) &&  !empty($_POST['zaszyfrowana']) )
                            {
                                $nazwa = $_POST['nazwa'];
                                $tresc_zaszyfrowana = $_POST['zaszyfrowana'];
                                
                                $conn = mysqli_connect('localhost', 'root', '', 'szyfry') or die ("bład");
                                $que = mysqli_query($conn, "SELECT szyfry.nazwa, szyfry.klucz FROM szyfry WHERE szyfry.nazwa = '$nazwa'");
                            if (mysqli_num_rows($que)>0)
                            {
                                while ($selected = mysqli_fetch_array($que))
                                {
                                    $klucz = $selected[1];
                                    $alfabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","x","y","z"];
                                    $index = 0;
                                    for ($i=0; $i<strlen($tresc_zaszyfrowana); $i++)
                                        {
                                            $wpisano = false;
                                                for ($j=0; $j<sizeof($alfabet);$j++)
                                                {
                                                        if ($tresc_zaszyfrowana[$i] == $alfabet[$j])
                                                        {
                                                            if($j-$klucz[$index]>0)
                                                            {
                                                                echo $alfabet[$j-$klucz[$index]];
                                                            }
                                                            else
                                                            {
                                                                echo $alfabet[$j-$klucz[$index]+sizeof($alfabet)];
                                                            }
                                                            $wpisano = true;
                                                        } 
                                                }
                                                if($index+1 < strlen($klucz))
                                                {
                                                    $index++;
                                                }
                                                else
                                                {
                                                    $index = 1;
                                                }
                                            if($wpisano==false)
                                            {
                                                echo $tresc_zaszyfrowana[$i];
                                            }                
                                        
                                    }
                                }   
                            }
                            else
                            {
                                echo "Nie znaleziono hasła";
                            }
                        }
                            }
                            else
                            {
                                echo "Wypełnij pola";
                            }
                        
  
                    ?>
                </div>
    </div>
</body>
</html>