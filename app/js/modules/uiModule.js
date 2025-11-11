// js/modules/uiModule.js
import { initGame } from './gameModule.js';

function setupDesktopNavigation() {
    const navList = document.querySelector('.nav-list');
    const arrowLeft = document.querySelector('.nav-arrow-left');
    const arrowRight = document.querySelector('.nav-arrow-right');

    if (!navList) return;

    const authItems = navList.querySelectorAll('.auth-item');
    const premiumItems = navList.querySelectorAll('.premium-nav-item');

    const updateNavigation = () => {
        const isLoggedIn = authItems.length > 0 && window.getComputedStyle(authItems[0]).display === 'none';

        Array.from(navList.children).forEach((item) => {
            if (item.classList.contains('auth-item')) {
                item.style.display = isLoggedIn ? 'none' : 'flex';
            }
            else if (item.classList.contains('premium-nav-item')) {
                item.style.display = isLoggedIn ? 'flex' : 'none';
            }
            else {
                item.style.display = 'flex';
            }
        });

        if (arrowLeft && arrowRight) {
            arrowLeft.style.display = 'none';
            arrowRight.style.display = 'none';
        }
    };

    window.addEventListener('resize', updateNavigation);
    document.addEventListener('authStateChanged', updateNavigation);

    updateNavigation();
}

export function setupUI(map) {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    setupDesktopNavigation();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') === '#epsi-game') return;

        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // --- Lógica para el Modal del Juego ---
    const gameLink = document.querySelector('a[href="#epsi-game"]');
    const gameSection = document.getElementById('epsi-game');
    
    if (gameLink && gameSection) {
        const closeGameBtn = gameSection.querySelector('.close-game');

        gameLink.addEventListener('click', (e) => {
            e.preventDefault();
            gameSection.classList.add('active');
            document.body.style.overflow = 'hidden';
            initGame();
        });

        const closeGame = () => {
            gameSection.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (closeGameBtn) {
            closeGameBtn.addEventListener('click', closeGame);
        }

        gameSection.addEventListener('click', (e) => {
            if (e.target === gameSection) {
                closeGame();
            }
        });
    }

    // --- Lógica para cerrar el Modal del Clima ---
    const weatherModal = document.getElementById('weather-modal');
    if (weatherModal) {
        const closeWeatherBtn = weatherModal.querySelector('.close-weather');

        const closeWeather = () => {
            weatherModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if(closeWeatherBtn) {
            closeWeatherBtn.addEventListener('click', closeWeather);
        }

        weatherModal.addEventListener('click', (e) => {
            if (e.target === weatherModal) {
                closeWeather();
            }
        });
    }

    // --- INICIO: Lógica para cerrar el Modal de Direcciones ---
    const directionsModal = document.getElementById('directions-modal');
    if (directionsModal) {
        const closeDirectionsBtn = directionsModal.querySelector('.close-directions');

        const closeDirections = () => {
            directionsModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (closeDirectionsBtn) {
            closeDirectionsBtn.addEventListener('click', closeDirections);
        }

        directionsModal.addEventListener('click', (e) => {
            if (e.target === directionsModal) {
                closeDirections();
            }
        });
    }
    // --- FIN: Lógica para cerrar el Modal de Direcciones ---
}