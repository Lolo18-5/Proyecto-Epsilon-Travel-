<?php
require_once 'php/db_connect.php'; 
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Epsi-Chat - Asistente de Viaje</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/animations.css">
</head>
<body>
    <header class="main-header">
        <div class="header-container">
            <div class="header-left">
                <div class="logo-container">
                    <img src="https://via.placeholder.com/200x80/00a1ff/ffffff?text=EPSILON" alt="Epsilon" class="logo">
                    <img src="https://via.placeholder.com/180x80/ffffff/000000?text=TRAVEL" alt="Travel" class="logo-educativo">
                    <div class="divider"></div>
                </div>
            </div>
    
            <div class="header-center">
                <h1 class="main-title gradient-text">TURISMO NACIONAL</h1>
            </div>
    
            <div class="header-right">
                <div class="nav-wrapper">
                    <button class="nav-arrow nav-arrow-left" aria-label="Desplazar navegación izquierda">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="nav-container">
                        <nav class="main-nav">
                            <ul class="nav-list">
                                <li><a href="index.php" class="nav-link">Inicio</a></li>
                                <li><a href="index.php#destinos" class="nav-link">Destinos</a></li>
        
                                <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true): ?>
                                    <li><a href="chat.php" class="nav-link premium-nav-item active">Epsi-Chat</a></li>
                                    <li><a href="index.php#epsi-game" class="nav-link premium-nav-item">Epsi-Game</a></li>
                                <?php else: ?>
                                    <li class="auth-item"><a href="login.html" class="nav-link">Login</a></li>
                                    <li class="auth-item"><a href="register.html" class="nav-link">Registro</a></li>
                                <?php endif; ?>
                            </ul>
                        </nav>
                    </div>
                    <button class="nav-arrow nav-arrow-right" aria-label="Desplazar navegación derecha">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="user-profile-area" id="user-profile-area"></div>
                <div class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </div>
    </header>

    <main class="chat-section">
        <div class="chat-container">
            <div class="chat-header">
                <h2><i class="fas fa-robot"></i> Epsi-Chat</h2>
                <p>Tu asistente de turismo en Uruguay</p>
            </div>
            <div class="chat-messages" id="chat-messages">
                <div class="message bot-message">
                    <p>¡Hola! Soy Epsi, tu asistente de viaje. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre destinos, actividades o precios.</p>
                </div>
            </div>
            <div class="chat-suggestions" id="chat-suggestions">
                <button class="suggestion-btn" data-prompt="Dame una recomendación de playa para familias">Planes familiares</button>
                <button class="suggestion-btn" data-prompt="¿Cuál es el mejor destino para aventura?">Destinos de aventura</button>
                <button class="suggestion-btn" data-prompt="Compara Montevideo y Punta del Este">Comparar destinos</button>
                <button class="suggestion-btn" data-prompt="¿Qué puedo hacer en Colonia del Sacramento?">Actividades en Colonia</button>
            </div>
            <div class="chat-input-area">
                <input type="text" id="chat-input" placeholder="Escribe tu pregunta aquí..." autocomplete="off">
                <button id="send-btn" class="primary-btn"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    </main>

    <footer class="main-footer" id="contacto">
        <div class="footer-content">
            <div class="footer-section">
                <h4>Epsilon Travel Uruguay</h4>
                <p>Descubre la esencia de nuestro país a través de experiencias únicas.</p>
            </div>
            <div class="footer-section">
                <h4>Contacto</h4>
                <p><i class="fas fa-envelope"></i> polotecnologico@gmail.com</p>
                <p><i class="fas fa-phone"></i> 598 92 313 321</p>
            </div>
            <div class="footer-section">
                <h4>Síguenos</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Epsilon Travel Uruguay. Todos los derechos reservados.</p>
        </div>
    </footer>
    
    <script type="module" src="js/chat.js"></script>
</body>
</html>