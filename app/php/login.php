<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
session_start();
include 'db_connect.php';

header('Content-Type: application/json');
$response = ['success' => false, 'message' => 'Ocurrió un error desconocido.'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        $response['message'] = "El nombre de usuario y la contraseña son obligatorios.";
    } else {
        $stmt = $conn->prepare("SELECT id, username, email, password, profile_image_url FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($user = $result->fetch_assoc()) {
            if (password_verify($password, $user['password'])) {
                $_SESSION['loggedin'] = true;
                $_SESSION['id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                $_SESSION['email'] = $user['email'];
                $_SESSION['profile_image'] = $user['profile_image_url'];

                $response['success'] = true;
                $response['message'] = "Inicio de sesión exitoso. Redirigiendo...";
            } else {
                $response['message'] = "Nombre de usuario o contraseña incorrectos.";
            }
        } else {
            $response['message'] = "Nombre de usuario o contraseña incorrectos.";
        }
        $stmt->close();
    }
} else {
    $response['message'] = "Método no permitido.";
}

$conn->close();
echo json_encode($response);
?>