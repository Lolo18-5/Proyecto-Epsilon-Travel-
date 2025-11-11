// js/modules/authModule.js

/**
 * Muestra un mensaje en el contenedor de mensajes de un formulario.
 */
function displayMessage(formElement, message, isSuccess) {
    const messageContainer = formElement.querySelector('.form-message');
    if (!messageContainer) return;

    messageContainer.textContent = message;
    messageContainer.className = 'form-message';
    messageContainer.classList.add(isSuccess ? 'success' : 'error');
    messageContainer.style.display = 'block';
}

/**
 * Actualiza la UI del header dependiendo del estado de la sesión.
 */
function updateHeaderUI(userData) {
    const userProfileArea = document.getElementById('user-profile-area');
    const authItems = document.querySelectorAll('.auth-item');
    
    if (!userProfileArea) return;

    if (userData && userData.loggedin) {
        // Ocultar elementos de autenticación en el nav
        authItems.forEach(item => item.style.display = 'none');
        
        // Mostrar perfil de usuario en el área designada
        userProfileArea.innerHTML = `
            <div class="profile-circle" id="profile-circle" 
                 style="background-image: url('${userData.profile_image}')" 
                 title="${userData.username}">
            </div>
            <div class="profile-dropdown" id="profile-dropdown">
                <div class="dropdown-header">
                    <h4>${userData.username}</h4>
                    <p>${userData.email}</p>
                </div>
                <ul>
                    <li><a href="profile.html"><i class="fas fa-user-circle"></i> Mi Perfil</a></li>
                    <li><a href="php/logout.php"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a></li>
                </ul>
            </div>
        `;

        // Configurar eventos para el dropdown del perfil
        const circle = document.getElementById('profile-circle');
        const dropdown = document.getElementById('profile-dropdown');
        
        if (circle && dropdown) {
            circle.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
            
            document.addEventListener('click', () => {
                dropdown.classList.remove('active');
            });
        }

    } else {
        // Mostrar elementos de autenticación en el nav
        authItems.forEach(item => item.style.display = 'block');
        // Limpiar el área de perfil
        userProfileArea.innerHTML = '';
    }

    // Disparar un evento personalizado para notificar a otros módulos del cambio
    document.dispatchEvent(new CustomEvent('authStateChanged'));
}

/**
 * Carga los datos del perfil en la página de perfil.
 */
function populateProfilePage(userData) {
    const usernameEl = document.getElementById('profile-username');
    const emailEl = document.getElementById('profile-email');
    const imageEl = document.getElementById('profile-image-display');

    if (usernameEl && emailEl && imageEl) {
        usernameEl.textContent = userData.username;
        emailEl.textContent = userData.email;
        imageEl.src = userData.profile_image;
    }
}

/**
 * Verifica el estado de la sesión con el backend y actualiza la UI.
 */
export async function checkSession() {
    try {
        const response = await fetch('php/check_session.php');
        
        if (!response.ok) {
            throw new Error(`El servidor respondió con estado ${response.status}`);
        }
        
        const data = await response.json();
        updateHeaderUI(data);
        
        if (window.location.pathname.includes('profile.html')) {
            if (!data.loggedin) {
                window.location.href = 'login.html';
            } else {
                populateProfilePage(data);
            }
        }
        return data;
    } catch (error) {
        console.error('Error al verificar la sesión:', error);
        updateHeaderUI({ loggedin: false });
        return { loggedin: false };
    }
}

/**
 * Configura todos los manejadores de eventos para los formularios.
 */
export function setupAuthEventListeners() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const profileUpdateForm = document.getElementById('profile-update-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const response = await fetch('php/login.php', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            displayMessage(loginForm, result.message, result.success);
            if (result.success) {
                await checkSession();
                setTimeout(() => { window.location.href = 'index.php'; }, 1500);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(registerForm);
            const response = await fetch('php/register.php', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            displayMessage(registerForm, result.message, result.success);
            if (result.success) {
                setTimeout(() => { window.location.href = 'login.html'; }, 2000);
            }
        });
    }

    if (profileUpdateForm) {
        const fileInput = document.getElementById('profileImage');
        const fileNameEl = document.getElementById('file-name');

        if (fileInput && fileNameEl) {
            fileInput.addEventListener('change', () => {
                fileNameEl.textContent = fileInput.files.length > 0 
                    ? fileInput.files[0].name 
                    : 'Seleccionar un archivo...';
            });
        }

        profileUpdateForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(profileUpdateForm);
            const response = await fetch('php/profile_update.php', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            displayMessage(profileUpdateForm, result.message, result.success);
            if (result.success) {
                const timestamp = new Date().getTime();
                const profileImage = document.getElementById('profile-image-display');
                if (profileImage) {
                    profileImage.src = `${result.new_image_url}?t=${timestamp}`;
                }
                const headerProfileCircle = document.getElementById('profile-circle');
                if (headerProfileCircle) {
                    headerProfileCircle.style.backgroundImage = `url('${result.new_image_url}?t=${timestamp}')`;
                }
            }
        });
    }
}