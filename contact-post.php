<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "registration_db"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userMsg = $_POST['userMsg'];


$sql = "INSERT INTO contact (userName, userEmail, userPhone, userMsg) VALUES ('$userName', '$userEmail', '$userPhone', '$userMsg ')";

if ($conn->query($sql) === TRUE) {
    echo "thankyou";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>