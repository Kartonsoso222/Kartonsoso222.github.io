<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="post">
        Podaj nazwę użytkownika: <input type="text" name="nazwa" id=""> <br>
        Podaj hasło: <input type="text" name="haslo" id=""> <br>
        <input type="submit" value="Prześlij" name="wyslij">
    </form> 
    <?php
            if(array_key_exists('wyslij', $_POST))
            {
                if(!empty($_POST['haslo']) && !empty($_POST['nazwa']))
                {
                    $haslo = sha1($_POST['haslo']);
                    $nazwa = $_POST['nazwa'];
                    $conn = mysqli_connect('localhost', 'root', '', 'hashowanie') or die("Błąd");
                    $que = mysqli_query($conn, "SELECT hasla.nazwa, hasla.haslo, hasla.dane FROM hasla WHERE hasla.nazwa = '$nazwa'");
                    $result = mysqli_fetch_array($que);
                    if (mysqli_num_rows($que)!=1)
                    {
                        echo "Niepoprawna nazwa użytkownika";
                    }
                    else if($haslo == $result[1])
                    {
                        echo "Logowanie zakończone sukcesem! <br> Witaj $result[0] <br> Dane: $result[2]";                        
                    }
                    else if ($haslo != $result[1])
                    {
                        echo "Hasło niepoprawne";
                    }
                }
                else
                {
                    echo "Wypełnij pola";
                }
            }
    ?>
</body>
</html>