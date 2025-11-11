<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
// php/check_session.php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
    echo json_encode([
        'loggedin' => true,
        'username' => $_SESSION['username'],
        'email' => $_SESSION['email'],
        'profile_image' => $_SESSION['profile_image']
    ]);
} else {
    echo json_encode(['loggedin' => false]);
}
?>