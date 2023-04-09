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
        Podaj hasło: <input type="text" name="haslo" id=""> <br>
        Podaj nazwę: <input type="text" name="nazwa" id=""> <br>
        <input type="submit" value="Prześlij" name="wyslij">
    </form> 
    <br>


    <?php
            if(array_key_exists('wyslij', $_POST))
            {
                if(!empty($_POST['haslo']) && !empty($_POST['nazwa']))
                {
                    $haslo = sha1($_POST['haslo']);
                    $nazwa = $_POST['nazwa'];
                    $dane = rand(0,10);
                    $conn = mysqli_connect('localhost', 'root', '', 'hashowanie') or die("Błąd");
                    $que = mysqli_query($conn, "INSERT INTO `hasla`(`nazwa`, `haslo`, `dane`) VALUES ('$nazwa','$haslo','$dane')");
                }
                else
                {
                    echo "Wypełnij pola";
                }
            }
    ?>

    <br>
</body>
</html>