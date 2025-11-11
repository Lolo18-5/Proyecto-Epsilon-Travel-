// js/main.js

import { initializeMap } from './modules/mapModule.js';
import { setupUI } from './modules/uiModule.js';
import { setupFilters } from './modules/filterModule.js';
import { checkSession } from './modules/authModule.js';
import './modules/gameModule.js';
import './modules/weatherModule.js'; // Aseguramos que el módulo del clima se cargue
import './modules/directionsModule.js'; // Aseguramos que el módulo de direcciones se cargue

document.addEventListener('DOMContentLoaded', async () => {
    // Verificar sesión primero para que afecte la navegación
    await checkSession();
    
    try {
        const map = await initializeMap();
        setupUI(map);
        setupFilters();

    } catch (error) {
        console.error("Error fatal durante la inicialización de la aplicación:", error);
        document.body.innerHTML = `
            <div style="color: white; text-align: center; padding: 50px;">
                <h1>Error al Cargar el Mapa</h1>
                <p>No se pudo inicializar la aplicación. Por favor, asegúrate de que el servidor (npm start) esté funcionando y recarga la página.</p>
            </div>`;
    }
    
    const creditsBtn = document.querySelector('.credits-btn');
    const creditsModal = document.querySelector('.credits-modal');
    const closeCredits = document.querySelector('.close-credits');
    
    if(creditsBtn && creditsModal && closeCredits) {
        creditsBtn.addEventListener('click', () => {
            creditsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeCredits.addEventListener('click', () => {
            creditsModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        creditsModal.addEventListener('click', (e) => {
            if (e.target === creditsModal) {
                creditsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    const mapContainer = document.getElementById('uruguay-map');
    if (mapContainer) {
        mapContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
        }, { passive: false });
    }
});