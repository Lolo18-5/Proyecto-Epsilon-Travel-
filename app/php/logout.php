<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
// php/logout.php
session_start();
session_unset();
session_destroy();
header("Location: ../index.php");
exit;
?>