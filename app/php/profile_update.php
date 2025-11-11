<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

session_start();
include 'db_connect.php';

$response = ['success' => false, 'message' => 'No tienes permiso para realizar esta acción.'];
$maxFileSize = 2 * 1024 * 1024; // 2MB

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
    if (isset($_FILES['profileImage']) && $_FILES['profileImage']['error'] == UPLOAD_ERR_OK) {
        if ($_FILES['profileImage']['size'] > $maxFileSize) {
            $response['message'] = 'El archivo es demasiado grande (máximo 2MB).';
            echo json_encode($response);
            exit;
        }

        $upload_dir = '../img/profiles/';
        $file_extension = strtolower(pathinfo($_FILES['profileImage']['name'], PATHINFO_EXTENSION));
        $allowed_types = ['jpg', 'jpeg', 'png', 'gif'];

        if (in_array($file_extension, $allowed_types)) {
            if (!file_exists($upload_dir)) {
                mkdir($upload_dir, 0777, true);
            }

            $new_filename = 'user_' . $_SESSION['id'] . '_' . time() . '.' . $file_extension;
            $upload_file = $upload_dir . $new_filename;
            
            if (move_uploaded_file($_FILES['profileImage']['tmp_name'], $upload_file)) {
                $profile_image_url = 'img/profiles/' . $new_filename;
                
                $stmt_select = $conn->prepare("SELECT profile_image_url FROM users WHERE id = ?");
                $stmt_select->bind_param("i", $_SESSION['id']);
                $stmt_select->execute();
                $result = $stmt_select->get_result();
                $old_image = $result->fetch_assoc()['profile_image_url'];
                $stmt_select->close();
                
                if ($old_image && $old_image !== 'img/profiles/default.png' && file_exists('../' . $old_image)) {
                    unlink('../' . $old_image);
                }

                $stmt = $conn->prepare("UPDATE users SET profile_image_url = ? WHERE id = ?");
                $stmt->bind_param("si", $profile_image_url, $_SESSION['id']);
                
                if ($stmt->execute()) {
                    $_SESSION['profile_image'] = $profile_image_url;
                    $response['success'] = true;
                    $response['message'] = 'Imagen de perfil actualizada correctamente.';
                    $response['new_image_url'] = $profile_image_url;
                } else {
                    $response['message'] = 'Error al actualizar la base de datos.';
                }
                $stmt->close();
            } else {
                $response['message'] = 'Error al guardar el archivo subido.';
            }
        } else {
            $response['message'] = 'Tipo de archivo no permitido (solo JPG, PNG, GIF).';
        }
    } else {
        $response['message'] = 'No se seleccionó ninguna imagen o hubo un error en la subida.';
    }
}

$conn->close();
echo json_encode($response);
?>