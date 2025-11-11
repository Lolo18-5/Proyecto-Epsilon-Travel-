// js/modules/chatModule.js

const API_URL = 'http://localhost:3000/api/chat'; // URL de tu backend

const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const suggestionsContainer = document.getElementById('chat-suggestions');

function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    
    const p = document.createElement('p');
    p.innerHTML = text; // Usamos innerHTML para renderizar posibles formatos
    messageElement.appendChild(p);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageElement;
}

function showTypingIndicator() {
    const typingMessage = addMessage(`
        <div class="typing-indicator">
            <span></span><span></span><span></span>
        </div>`, 'bot');
    typingMessage.classList.add('thinking');
    return typingMessage;
}

async function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText === '') return;

    addMessage(messageText, 'user');
    chatInput.value = '';
    suggestionsContainer.style.display = 'none'; // Ocultar sugerencias después de enviar

    const typingIndicator = showTypingIndicator();

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: messageText }),
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor.');
        }

        const data = await response.json();
        // Reemplaza el indicador de "escribiendo" con la respuesta real
        typingIndicator.classList.remove('thinking');
        typingIndicator.querySelector('p').innerText = data.reply;

    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        typingIndicator.classList.remove('thinking');
        typingIndicator.querySelector('p').innerText = "Lo siento, tuve un problema para conectarme. Por favor, intenta de nuevo más tarde.";
    }
}

export function setupChat() {
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    suggestionsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('suggestion-btn')) {
            const prompt = e.target.dataset.prompt;
            chatInput.value = prompt;
            sendMessage();
        }
    });
}