<?php
require_once 'php/db_connect.php'; 
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Epsilon Travel Uruguay - Turismo Nacional</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/animations.css">
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css" type="text/css">
    <link rel="shortcut icon" href="img/AguasDulces1.avif" type="image/x-icon">
</head>
<body>
   <header class="main-header">
    <div class="header-container">
        <div class="header-left">
            <!-- Banner Rotativo - Reemplaza logo-container -->
            <div class="banner-container">
                <div class="banner-slider">
                    <div class="banner-slide active">
                        <img src="img/Banner1.png" alt="Banner 1" class="banner-image">
                    </div>
                    <div class="banner-slide">
                        <img src="img/Banner2.png" alt="Banner 2" class="banner-image">
                    </div>
                </div>
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
        <li><a href="#destinos" class="nav-link">Destinos</a></li>

        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true): ?>
            <li><a href="chat.php" class="nav-link premium-nav-item">Epsi-Chat</a></li>
            <li><a href="#epsi-game" class="nav-link premium-nav-item">Epsi-Game</a></li>
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
</header>

<section class="map-section" id="destinos">
    <div class="map-container">
        <div id="uruguay-map"></div>
        <div class="map-overlay"></div>
    </div>
</section>

<section id="destination-detail" class="destination-detail">
</section>

<section id="epsi-game" class="game-section">
    <div class="game-container">
        <button class="close-game" aria-label="Cerrar juego">×</button>
        <h2 class="game-title">EPSI-GAME</h2>
        <div class="game-content">
            <div class="game-question-container">
                <div class="question-counter">Pregunta <span id="current-question">1</span>/30</div>
                <div class="difficulty-bar">
                    <div class="difficulty-fill" id="difficulty-fill"></div>
                </div>
                <div class="difficulty-text" id="difficulty-text">Fácil</div>
                <div class="question-text" id="question-text">¿Cuál es la capital de Uruguay?</div>
                <div class="options-container" id="options-container">
                </div>
                <div class="progress-container">
                    <div class="progress-text">Porcentaje de aciertos: <span id="progress-percent">0</span>%</div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progress-fill"></div>
                    </div>
                </div>
            </div>
            <div class="game-controls">
                <button id="restart-game" class="game-button">Reiniciar</button>
            </div>
        </div>
    </div>
</section>

<footer class="main-footer" id="contacto">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Epsilon Travel Uruguay</h4>
            <p>Descubre la esencia de nuestro país a través de experiencias únicas.</p>
        </div>
        <div class="footer-section">
            <h4>Contacto</h4>
            <p><i class="fas fa-envelope"></i> polotecnologico@gmail.com</p>
            <p><i class="fas fa-phone"></i> 46343656</p>
        </div>
        <div class="footer-section">
            <h4>Direccion</h4>
            <div class="social-links">
            <p>Sarandí, esquina Michoelsson, Tacuarembó 45000.</p>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© 2025 Epsilon Travel Uruguay. Todos los derechos reservados.</p>
    </div>
</footer>

<button class="filter-btn" title="Filtrar destinos">
    <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 0 24 24" width="26px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
    </svg>
</button>

<div class="filter-modal">
    <div class="filter-content">
        <h3>Filtrar por Actividad</h3>
        <div class="filter-options" id="filter-options">
        </div>
        <div class="filter-actions">
            <button class="primary-btn" id="apply-filters-btn">Aplicar Filtros</button>
            <button class="secondary-btn" id="reset-filters-btn">Limpiar</button>
        </div>
        <button class="close-filter"><i class="fas fa-times"></i></button>
    </div>
</div>

<button class="credits-btn">
    <i class="fas fa-users"></i>
</button>
<div class="credits-modal">
    <div class="credits-content">
        <h3>Equipo de Desarrollo</h3>
        <div class="credits-section">
            <h4>Supervisores</h4>
            <p>Dante Palombo</p>
            <p>Lucila de Mattos</p>
            <p>Mauricio Gonzalez</p>
            <p>Veronica Fabila</p>
        </div>
        <div class="credits-section">
            <h4>Equipo de Desarrollo</h4>
            <p>Lorenzo Rodriguez</p>
            <p>Cristhian Pintos</p>
            <p>Alejo Claro</p>
            <p>Mateo Gonzalez</p>
        </div>
        <button class="close-credits"><i class="fas fa-times"></i></button>
    </div>
</div>

<div class="weather-modal" id="weather-modal">
    <div class="weather-content">
        <button class="close-weather" aria-label="Cerrar clima">×</button>
        <div id="weather-data-container"></div>
    </div>
</div>

<div class="directions-modal" id="directions-modal">
    <div class="directions-content">
        <button class="close-directions" aria-label="Cerrar calculadora">&times;</button>
        <h3 class="directions-title">Calculadora de Distancias</h3>
        <div class="directions-body">
            <div class="directions-controls">
                <div class="input-wrapper">
                    <label for="origin-input">Origen</label>
                    <div id="origin-input-container">
                        </div>
                </div>
                <div class="input-wrapper">
                    <label>Destino</label>
                    <div class="destination-display-box" id="destination-display">
                        </div>
                </div>
                <div class="directions-results" id="directions-results">
                    </div>
            </div>
            <div class="directions-map-container">
                <div id="directions-map"></div>
            </div>
        </div>
    </div>
</div>
<script src="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js"></script>
<script type="module" src="js/main.js"></script>
<script>
    document.addEventListener('keydown', (e) => {
        const gallery = document.querySelector('.fullscreen-gallery');
        if (!gallery || !gallery.classList.contains('active')) return;
        
        if (e.key === 'ArrowRight') document.querySelector('.gallery-next').click();
        if (e.key === 'ArrowLeft') document.querySelector('.gallery-prev').click();
        if (e.key === 'Escape') document.querySelector('.gallery-close').click();
    });

    // Banner Rotativo
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.banner-slide');
        let currentSlide = 0;
        
        function showNextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        // Cambiar banner cada 7 segundos
        setInterval(showNextSlide, 4000);
    });
</script>
</body>
</html>