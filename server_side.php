<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reservation";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//get data
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$bank_account = $_POST['bank_account'];

//inserer les donnees
$sql = "INSERT INTO reserver (name, surname, email, bankaccount) VALUES ('$name', '$surname', '$email', '$bank_account')";

$conn->close();

header("Location: success.html");

exit;
?>

