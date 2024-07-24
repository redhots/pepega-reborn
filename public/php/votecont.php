<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$servername = "localhost";
$database = "u159143339_clicks";
$username = "u159143339_cliskuser";
$password = "Pepega2024";

$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT vote1,vote2,vote3,vote4,vote5,vote6,vote7,vote8,vote9,vote10 FROM vote WHERE id=1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(["vote1" => 0,"vote2" => 0,"vote3" => 0,"vote4" => 0,"vote5" => 0,"vote6" => 0,"vote7" => 0,"vote8" => 0,"vote9" => 0,"vote10" => 0]);
}


$conn->close();
?>
