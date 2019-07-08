<?php
$date = $_GET['aDate'];
$text = $_GET['aName'];
$price = $_GET['aPrice'];

$servername = "localhost";
$user = "root";
$pass = "root";
$db = "wydatki";
$table = "wydatki2";



if ($date and $text and $price) {
    $connection = new mysqli($servername, $user, $pass, $db);
    
    if ($connection->connect_error) {
        die("Nie polaczylem sie");
    }
    echo "Polaczylem sie";

    $enter = "INSERT into `$table` (`dataz`, `opis`, `cena`) values ('$date', '$text', $price)";

    if ($connection->query($enter) === TRUE) {
        echo "Dodałem wpis";
    } 
    else 
    {
        echo "Error: " . $enter . "<br>" . $connection->error; 
    }

}
else
    echo "Nie podałeś jednej z danych";
?>