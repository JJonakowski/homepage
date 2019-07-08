<?php
$servername = "localhost";
$user = "root";
$pass = "root";
$db = "wydatki";
$table = "wydatki2";

$connect = mysqli_connect($servername, $user, $pass, $db);

if (mysqli_connect_errno())
  {
  echo "Nie polaczylem sie: " . mysqli_connect_error();
  }

$sql = "Select * FROM `$table`";
$result = $connect->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row["id"]. " - " . $row["dataz"]. " " . $row["opis"]. " " . $row["cena"]. "<br>";
    }
}

mysqli_close($connect);

?>

