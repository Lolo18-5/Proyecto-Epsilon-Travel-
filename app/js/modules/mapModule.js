// js/modules/mapModule.js

import { destinations } from './destinations.js';
import { displayWeatherForDestination } from './weatherModule.js';
import { showDirectionsModal } from './directionsModule.js';

// --- VARIABLES GLOBALES DEL MÓDULO ---
const URUGUAY_CENTER = [-56.0, -33.0];
const DEFAULT_ZOOM = 6.2;
let map;
let currentImageIndex = 0;
let currentDestinationId = null;
let galleryImages = [];
let currentMarkers = [];
let currentLanguage = 'es'; // Idioma por defecto

export const getMapboxAccessToken = () => mapboxgl.accessToken;

export async function initializeMap() {
    try {
        const response = await fetch('http://localhost:3000/api/keys');
        if (!response.ok) {
            throw new Error('No se pudo obtener la clave de Mapbox desde el backend.');
        }
        const keys = await response.json();
        mapboxgl.accessToken = keys.mapboxAccessToken;

    } catch (error) {
        console.error("Error al obtener la clave del mapa:", error);
        mapboxgl.accessToken = 'pk.eyJ1IjoibG9yZW56bzE4MCIsImEiOiJjbWNiNDZwdGwwYTViMmpwcXpyNnBteW9lIn0.wT7ZAv0ytq00HJ80Pi4a0Q'; 
        alert('ADVERTENCIA: No se pudo conectar al servidor para obtener la clave del mapa. Se está usando una clave de respaldo.');
    }
    
    map = new mapboxgl.Map({
        container: 'uruguay-map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: URUGUAY_CENTER,
        zoom: DEFAULT_ZOOM,
        minZoom: 5.5,
        maxZoom: 14,
        scrollZoom: false
    });

    const navControl = new mapboxgl.NavigationControl({ showCompass: false });
    map.addControl(navControl, 'bottom-right');

    map.on('load', () => {
        addDestinationMarkers();
        styleMap();
        setupGalleryAndVideo();
    });

    return map;
}

function styleMap() {
    map.setPaintProperty('water', 'fill-color', '#0a0a1a');
    map.setPaintProperty('water', 'fill-opacity', 0.8);
}

function addDestinationMarkers() {
    updateMarkers(destinations);
}

export function updateMarkers(destinationsToDisplay) {
    currentMarkers.forEach(marker => marker.remove());
    currentMarkers = [];

    destinationsToDisplay.forEach(destination => {
        const markerEl = createCustomMarker(destination);
        
        const marker = new mapboxgl.Marker({
            element: markerEl,
            anchor: 'bottom'
        })
        .setLngLat(destination.coordinates)
        .addTo(map);

        currentMarkers.push(marker);
    });
}

function createCustomMarker(destination) {
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.dataset.id = destination.id;
    el.innerHTML = `
        <div class="marker-pin">
            <div class="marker-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="marker-label">${destination.name}</div>
        </div>
    `;
    
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        showDestinationDetails(destination.id);
        centerMapOnDestination(destination);
    });

    return el;
}

function centerMapOnDestination(destination) {
    map.flyTo({
        center: destination.coordinates,
        zoom: 11,
        essential: true,
        duration: 1200
    });
}

function setupGalleryAndVideo() {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="fullscreen-gallery">
            <button class="gallery-close"><i class="fas fa-times"></i></button>
            <div class="gallery-viewport">
                <img src="" class="gallery-image" alt="Imagen del destino">
                <div class="gallery-nav">
                    <button class="gallery-prev"><i class="fas fa-chevron-left"></i></button>
                    <button class="gallery-next"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="gallery-indicators"></div>
            </div>
        </div>
        <div class="fullscreen-video">
            <button class="video-close"><i class="fas fa-times"></i></button>
            <div class="video-viewport">
                <iframe class="video-iframe" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    `);

    document.querySelector('.gallery-close').addEventListener('click', closeGallery);
    document.querySelector('.gallery-prev').addEventListener('click', showPrevImage);
    document.querySelector('.gallery-next').addEventListener('click', showNextImage);
    document.querySelector('.video-close').addEventListener('click', closeVideoModal);
}

export function showDestinationDetails(destinationId) {
    const destination = destinations.find(d => d.id === destinationId);
    if (!destination) return;

    currentDestinationId = destinationId;
    galleryImages = destination.images;

    const detailSection = document.querySelector('#destination-detail');
    detailSection.innerHTML = `
        <div class="detail-container" data-id="${destination.id}">
            <div class="detail-header">
                <div>
                    <h2 class="destination-title">${destination.name}</h2>
                    <div class="detail-meta-inline">
                        <span class="location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${destination.location}</span>
                        </span>
                        <span class="best-time">
                            <i class="far fa-calendar-alt"></i>
                            <span>Mejor época: ${destination.bestTime}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="destination-info">
                <div class="destination-tabs">
                    <ul class="tabs-list">
                        <li class="tab-item active" data-tab="historia"><i class="fas fa-landmark"></i> ${getTabText('historia')}</li>
                        <li class="tab-item" data-tab="atracciones"><i class="fas fa-map-signs"></i> ${getTabText('atracciones')}</li>
                        <li class="tab-item" data-tab="por-que-ir"><i class="fas fa-heart"></i> ${getTabText('porQueIr')}</li>
                        <li class="language-selector">
                            <button class="lang-btn ${currentLanguage === 'es' ? 'active' : ''}" data-lang="es">
                                <i class="fas fa-flag"></i> ES
                            </button>
                            <button class="lang-btn ${currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
                                <i class="fas fa-flag"></i> EN
                            </button>
                            <button class="lang-btn ${currentLanguage === 'po' ? 'active' : ''}" data-lang="po">
                                <i class="fas fa-flag"></i> PO
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="tab-content">
                        <p>${getContentForLanguage(destination, 'historia')}</p>
                    </div>
                </div>
                <div class="activities">
                    <h4>Actividades</h4>
                    <ul class="activities-list">
                        ${destination.activities.map(a => `<li>${a}</li>`).join('')}
                    </ul>
                </div>
                <div class="cta-buttons">
                    <button class="primary-btn" id="show-directions">
                        <i class="fas fa-route"></i> Cómo Llegar
                    </button>
                    <button class="primary-btn" id="show-weather">
                        <i class="fas fa-cloud-sun"></i> Clima
                    </button>
                    ${destination.videoUrl ? `
                    <button class="secondary-btn video-btn" id="show-video">
                        <i class="fas fa-video"></i> Ver video
                    </button>` : ''}
                    <button class="secondary-btn images-btn" id="show-images">
                        <i class="fas fa-images"></i> Imágenes
                    </button>
                </div>
            </div>
            <button class="close-detail" aria-label="Cerrar detalles"><i class="fas fa-times"></i></button>
        </div>
    `;

    setupDetailInteractions(detailSection, destination);
    detailSection.classList.add('active');
    detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getTabText(tabName) {
    const texts = {
        'historia': { es: 'Historia', en: 'History', po: 'História' },
        'atracciones': { es: 'Atracciones', en: 'Attractions', po: 'Atrações' },
        'porQueIr': { es: '¿Por qué ir?', en: 'Why go?', po: 'Por que ir?' }
    };
    return texts[tabName]?.[currentLanguage] || texts[tabName].es;
}

function getContentForLanguage(destination, contentKey) {
    const languageKey = currentLanguage === 'es' ? contentKey : 
                       currentLanguage === 'en' ? `${contentKey}_en` : 
                       `${contentKey}_po`;
    
    const content = destination[languageKey] || destination[contentKey] || 'Información no disponible.';
    return content.replace(/\n\n/g, '</p><p>');
}

function setupDetailInteractions(detailSection, destination) {
    // Botones de idioma
    const langButtons = detailSection.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLanguage = btn.dataset.lang;
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showDestinationDetails(currentDestinationId); // Recargar detalles con nuevo idioma
        });
    });

    const tabItems = detailSection.querySelectorAll('.tab-item');
    const tabContent = detailSection.querySelector('#tab-content');
    
    tabItems.forEach(tab => {
        tab.addEventListener('click', () => {
            tabItems.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const tabName = tab.dataset.tab;
            let contentKey = tabName;
            if (tabName === 'por-que-ir') {
                contentKey = 'porQueIr';
            }
            
            const content = `<p>${getContentForLanguage(destination, contentKey)}</p>`;
            tabContent.innerHTML = content;
        });
    });

    detailSection.querySelector('#show-images').addEventListener('click', () => openGallery(0));
    detailSection.querySelector('.close-detail').addEventListener('click', () => detailSection.classList.remove('active'));
    
    const weatherBtn = detailSection.querySelector('#show-weather');
    if (weatherBtn) {
        weatherBtn.addEventListener('click', () => {
            displayWeatherForDestination(destination);
        });
    }

    const directionsBtn = detailSection.querySelector('#show-directions');
    if (directionsBtn) {
        directionsBtn.addEventListener('click', () => {
            showDirectionsModal(destination);
        });
    }

    if (destination.videoUrl) {
        const videoBtn = detailSection.querySelector('#show-video');
        videoBtn.addEventListener('click', () => openVideoModal(destination.videoUrl));
    }
}

function openGallery(index) {
    const gallery = document.querySelector('.fullscreen-gallery');
    const img = gallery.querySelector('.gallery-image');
    const indicators = gallery.querySelector('.gallery-indicators');
    
    currentImageIndex = index;
    img.src = galleryImages[index];
    img.alt = `Imagen ${index + 1} de ${destinations.find(d => d.id === currentDestinationId).name}`;
    
    indicators.innerHTML = galleryImages.map((_, i) => `
        <span class="indicator ${i === index ? 'active' : ''}" data-index="${i}"></span>
    `).join('');
    
    indicators.querySelectorAll('.indicator').forEach(ind => {
        ind.addEventListener('click', (e) => openGallery(parseInt(e.target.dataset.index)));
    });
    
    gallery.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.querySelector('.fullscreen-gallery').classList.remove('active');
    document.body.style.overflow = '';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openGallery(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openGallery(currentImageIndex);
}

function openVideoModal(videoUrl) {
    const videoModal = document.querySelector('.fullscreen-video');
    const iframe = videoModal.querySelector('.video-iframe');
    let embedUrl = videoUrl;

    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(youtubeRegex);
    if (match && match[1]) {
        embedUrl = `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
    }
    
    iframe.src = embedUrl;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const videoModal = document.querySelector('.fullscreen-video');
    const iframe = videoModal.querySelector('.video-iframe');
    iframe.src = '';
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
}

export function getMapInstance() {
    return map;
}