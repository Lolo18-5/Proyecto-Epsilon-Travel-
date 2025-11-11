import { checkSession, setupAuthEventListeners } from './modules/authModule.js';

document.addEventListener('DOMContentLoaded', () => {
    // Verificar sesión y configurar listeners
    checkSession();
    setupAuthEventListeners();
});