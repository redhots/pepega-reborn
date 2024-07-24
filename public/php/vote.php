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

if (isset($data['vote1']) && isset($data['vote2']) && isset($data['vote3']) && isset($data['vote4']) && isset($data['vote5']) &&
    isset($data['vote6']) && isset($data['vote7']) && isset($data['vote8']) && isset($data['vote9']) && isset($data['vote10'])) {

    $num1 = (int)$data['vote1'];
    $num2 = (int)$data['vote2'];
    $num3 = (int)$data['vote3'];
    $num4 = (int)$data['vote4'];
    $num5 = (int)$data['vote5'];
    $num6 = (int)$data['vote6'];
    $num7 = (int)$data['vote7'];
    $num8 = (int)$data['vote8'];
    $num9 = (int)$data['vote9'];
    $num10 = (int)$data['vote10'];

    if ($num1 != 0 || $num2 != 0 || $num3 != 0 || $num4 != 0 || $num5 != 0 ||
        $num6 != 0 || $num7 != 0 || $num8 != 0 || $num9 != 0 || $num10 != 0) {

        $sql = "UPDATE vote 
                SET vote1=$num1, vote2=$num2, vote3=$num3, vote4=$num4, vote5=$num5, 
                    vote6=$num6, vote7=$num7, vote8=$num8, vote9=$num9, vote10=$num10 
                WHERE id=1";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success"]);
        } else {
            echo json_encode(["status" => "error", "message" => $conn->error]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Nenhum voto válido para atualizar"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Dados incompletos ou inválidos"]);
}

$conn->close();

?>
