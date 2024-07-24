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

$data = json_decode(file_get_contents('php://input'), true);
$num1 = (int)$data['number1'];
$num2 = (int)$data['number2'];
$num3 = (int)$data['number3'];
$num4 = (int)$data['number4'];

if($num1 != 0 && $num2 != 0 && $num3 != 0 && $num4 != 0){
    $sql = "UPDATE clicks SET ponke=$num1, brett=$num2, toshi=$num3, andy=$num4 WHERE id=1";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }
}



$conn->close();
?>
