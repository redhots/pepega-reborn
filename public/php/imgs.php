<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
define('UPLOAD_DIR', '../images/');

// Get the JSON data
$data = json_decode(file_get_contents('php://input'), true);

// Ensure the data URL format is correct
if (isset($data['imgBase64'])) {
    $img = $data['imgBase64'];
    $img = str_replace('data:image/png;base64,', '', $img);  
    $img = str_replace(' ', '+', $img);  
    $decodedData = base64_decode($img);
    $file = UPLOAD_DIR . uniqid() . '.webp';  
    $success = file_put_contents($file, $decodedData);  
    echo json_encode(['status' => $success ? 'success' : 'error', 'file' => $file]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'imgBase64 not found']);
}
?>
