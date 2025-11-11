<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
include 'db_connect.php';

header('Content-Type: application/json');
$response = ['success' => false, 'message' => 'Ocurrió un error desconocido.'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($email) || empty($password)) {
        $response['message'] = "Todos los campos son obligatorios.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = "El formato del correo electrónico es inválido.";
    } elseif (strlen($password) < 6) {
        $response['message'] = "La contraseña debe tener al menos 6 caracteres.";
    } else {
        $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
        $stmt->bind_param("ss", $username, $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $response['message'] = "El nombre de usuario o correo electrónico ya está en uso.";
        } else {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $stmt_insert = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            $stmt_insert->bind_param("sss", $username, $email, $hashed_password);

            if ($stmt_insert->execute()) {
                $response['success'] = true;
                $response['message'] = "¡Registro exitoso! Serás redirigido para iniciar sesión.";
            } else {
                $response['message'] = "Error durante el registro.";
            }
            $stmt_insert->close();
        }
        $stmt->close();
    }
} else {
    $response['message'] = "Método no permitido.";
}

$conn->close();
echo json_encode($response);
?>