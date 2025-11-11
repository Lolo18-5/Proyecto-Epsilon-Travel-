// js/chat.js
import { setupChat } from './modules/chatModule.js';
import { setupUI } from './modules/uiModule.js';

document.addEventListener('DOMContentLoaded', () => {
    setupUI(); // Configura el menú móvil, etc.
    setupChat(); // Inicializa la lógica del chat
});