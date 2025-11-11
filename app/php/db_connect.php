<?php

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Configuración de la BD
$servername = "localhost";
$username_db = "root";
$password_db = "";
$dbname = "turismo_db";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli($servername, $username_db, $password_db, $dbname);
    $conn->set_charset("utf8mb4");
} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    die(json_encode(['success' => false, 'message' => 'Error interno del servidor. No se pudo conectar a la base de datos.']));
}
?>