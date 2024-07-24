<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$servername = "localhost";
$database = "u159143339_clicks";
$username = "u159143339_cliskuser";
$password = "Pepega2024";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $database);


// Verifica a conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);
$email = (String)$data['Email'];


$sql = "INSERT INTO `users`(`email`) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();
?>
