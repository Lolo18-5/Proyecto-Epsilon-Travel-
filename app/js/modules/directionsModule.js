// js/modules/directionsModule.js
import { getMapboxAccessToken } from './mapModule.js';

let directionsMap;
let originGeocoder;
let currentDestination = null;

// Inicializa el módulo, el mapa pequeño y el geocodificador
function initializeDirections() {
    const accessToken = getMapboxAccessToken();
    if (!accessToken) {
        console.error("No se pudo obtener el token de Mapbox para el módulo de direcciones.");
        return;
    }

    // 1. Inicializar el mapa pequeño dentro del modal
    directionsMap = new mapboxgl.Map({
        container: 'directions-map',
        style: 'mapbox://styles/mapbox/dark-v10', // Estilo oscuro para consistencia
        center: [-56.1645, -34.9011], // Centro de Uruguay
        zoom: 6,
        interactive: false // Hacemos el mapa no interactivo por defecto
    });
    
    // 2. Inicializar el Geocoder para el autocompletado del origen
    originGeocoder = new MapboxGeocoder({
        accessToken: accessToken,
        mapboxgl: mapboxgl,
        marker: false, // No queremos un marcador para el origen
        placeholder: 'Ingresa un punto de partida',
        countries: 'uy', // Limitar la búsqueda a Uruguay
        language: 'es'
    });

    // 3. Añadir el Geocoder al contenedor en el HTML
    const originContainer = document.getElementById('origin-input-container');
    if (originContainer) {
        originContainer.appendChild(originGeocoder.onAdd(directionsMap));
    }
    
    // 4. Escuchar cuando el usuario selecciona un origen
    originGeocoder.on('result', (e) => {
        const originCoords = e.result.geometry.coordinates;
        if (currentDestination) {
            calculateAndDrawRoute(originCoords, currentDestination.coordinates);
        }
    });
}

// Llama a la API de Direcciones y dibuja la ruta
async function calculateAndDrawRoute(origin, destination) {
    const resultsContainer = document.getElementById('directions-results');
    resultsContainer.innerHTML = '<div class="loader"></div>'; // Muestra un loader

    const accessToken = getMapboxAccessToken();
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?geometries=geojson&overview=full&language=es&access_token=${accessToken}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.routes && data.routes.length > 0) {
            const route = data.routes[0];
            const geometry = route.geometry;
            
            // Dibujar la ruta en el mapa
            drawRoute(geometry);

            // Mostrar los resultados
            const distance = (route.distance / 1000).toFixed(1); // a km
            const duration = route.duration; // en segundos
            const hours = Math.floor(duration / 3600);
            const minutes = Math.floor((duration % 3600) / 60);
            
            resultsContainer.innerHTML = `
                <div class="result-item">
                    <i class="fas fa-road"></i>
                    <span><strong>Distancia:</strong> ${distance} km</span>
                </div>
                <div class="result-item">
                    <i class="fas fa-clock"></i>
                    <span><strong>Duración estimada:</strong> ${hours > 0 ? `${hours}h ` : ''}${minutes}min</span>
                </div>
            `;
        } else {
            resultsContainer.innerHTML = '<p class="error-message">No se pudo encontrar una ruta.</p>';
        }
    } catch (error) {
        console.error('Error al calcular la ruta:', error);
        resultsContainer.innerHTML = '<p class="error-message">Error al calcular la ruta.</p>';
    }
}

// Dibuja la geometría de la ruta en el mapa pequeño
function drawRoute(geometry) {
    // Si ya existe una ruta, la removemos primero
    if (directionsMap.getSource('route')) {
        directionsMap.removeLayer('route');
        directionsMap.removeSource('route');
    }

    // Añadimos la nueva ruta
    directionsMap.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': geometry
        }
    });

    directionsMap.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#00a1ff', // Color primario
            'line-width': 6,
            'line-opacity': 0.8
        }
    });

    // Ajustamos los límites del mapa para que se vea toda la ruta
    const bounds = new mapboxgl.LngLatBounds(geometry.coordinates[0], geometry.coordinates[0]);
    for (const coord of geometry.coordinates) {
        bounds.extend(coord);
    }
    directionsMap.fitBounds(bounds, {
        padding: 60 // Un poco de margen
    });
}

// Función principal que se exporta y se llama desde mapModule
export function showDirectionsModal(destination) {
    currentDestination = destination;
    const modal = document.getElementById('directions-modal');
    
    // Si el mapa aún no se ha inicializado, lo hacemos ahora
    if (!directionsMap) {
        initializeDirections();
    }
    
    // Pre-rellenar el destino
    const destinationDisplay = document.getElementById('destination-display');
    if (destinationDisplay) {
        destinationDisplay.textContent = destination.name;
    }
    
    // Limpiar resultados anteriores
    originGeocoder.clear();
    const resultsContainer = document.getElementById('directions-results');
    if(resultsContainer) resultsContainer.innerHTML = '';
    if (directionsMap.getSource('route')) {
        directionsMap.removeLayer('route');
        directionsMap.removeSource('route');
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Redimensionar el mapa para asegurar que se renderice correctamente en el modal
    setTimeout(() => {
        if (directionsMap) {
            directionsMap.resize();
        }
    }, 100);
}