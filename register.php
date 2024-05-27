<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "registration_db";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$arrival_date = $_POST['arrival_date'];
$number_of_guests = $_POST['number_of_guests'];
$Room_Type = $_POST['Room_Type'];
$Special_req = $_POST['Special_req'];
$Payment_Option = $_POST['Payment_Option'];


$sql = "INSERT INTO registrations (name, email, mobile, arrival_date, number_of_guests, Room_Type, Special_req, Payment_Option) VALUES ('$name', '$email', '$mobile', '$arrival_date', '$number_of_guests', '$Room_Type', '$Special_req', '$Payment_Option')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('Thank you for registration');</script>";
   echo "<script>window.location.href='index.html';</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();?>
