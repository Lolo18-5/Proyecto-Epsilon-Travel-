// js/modules/weatherModule.js

// Mapea los códigos de condición de WeatherAPI.com a íconos de Font Awesome
function getWeatherIcon(code, is_day) {
    const iconMap = {
        1000: is_day ? 'fas fa-sun' : 'fas fa-moon', // Clear
        1003: is_day ? 'fas fa-cloud-sun' : 'fas fa-cloud-moon', // Partly cloudy
        1006: 'fas fa-cloud', // Cloudy
        1009: 'fas fa-cloud-meatball', // Overcast
        1030: 'fas fa-smog', // Mist
        1063: is_day ? 'fas fa-cloud-sun-rain' : 'fas fa-cloud-moon-rain', // Patchy rain possible
        1066: is_day ? 'fas fa-cloud-sun' : 'fas fa-cloud-moon', // Patchy snow possible with sun/moon
        1087: 'fas fa-bolt', // Thundery outbreaks possible
        1183: 'fas fa-cloud-rain', // Light rain
        1189: 'fas fa-cloud-showers-heavy', // Moderate rain
        1195: 'fas fa-cloud-showers-heavy', // Heavy rain
        1213: 'fas fa-snowflake', // Light snow
        1219: 'fas fa-snowflake', // Moderate snow
        1225: 'fas fa-snowflake', // Heavy snow
        1273: 'fas fa-cloud-bolt', // Patchy light rain with thunder
        1276: 'fas fa-bolt' // Moderate or heavy rain with thunder
    };
    // Esta es una lista simplificada. Si el código no está, se usa un ícono genérico.
    return iconMap[code] || 'fas fa-cloud';
}

// Construye el HTML y lo inserta en el modal
function renderWeatherData(data, destinationName) {
    const container = document.getElementById('weather-data-container');
    const location = data.location;
    const current = data.current;
    const forecast = data.forecast.forecastday;

    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    // El primer día del pronóstico (hoy) tiene los datos de min/max
    const todayForecast = forecast[0].day;

    container.innerHTML = `
        <div class="weather-header">
            <h3 class="weather-title">Clima en ${destinationName}</h3>
            <p class="weather-location">Estación meteorológica: ${location.name}</p>
        </div>
        <div class="weather-current">
            <div class="weather-current-icon">
                <i class="${getWeatherIcon(current.condition.code, current.is_day)}"></i>
            </div>
            <div class="weather-current-details">
                <p class="current-temp">${Math.round(current.temp_c)}°C</p>
                <p class="current-desc">${current.condition.text}</p>
                <p class="min-max-temp">Max: ${Math.round(todayForecast.maxtemp_c)}° / Min: ${Math.round(todayForecast.mintemp_c)}°</p>
            </div>
        </div>
        <div class="weather-forecast">
            <h4>Pronóstico para los próximos días</h4>
            <div class="forecast-grid">
                ${forecast.slice(1, 5).map(day => { // Mostramos los siguientes 4 días
                    const date = new Date(day.date + 'T00:00:00'); // Asegura la fecha correcta
                    return `
                    <div class="forecast-card">
                        <p class="forecast-day">${daysOfWeek[date.getDay()]}</p>
                        <i class="forecast-icon ${getWeatherIcon(day.day.condition.code, true)}"></i>
                        <p class="forecast-temp">
                            <span class="temp-max">${Math.round(day.day.maxtemp_c)}°</span> / 
                            <span class="temp-min">${Math.round(day.day.mintemp_c)}°</span>
                        </p>
                    </div>
                `}).join('')}
            </div>
        </div>
    `;
}

// Función principal exportada, no cambia su lógica de llamada
export async function displayWeatherForDestination(destination) {
    const modal = document.getElementById('weather-modal');
    const container = document.getElementById('weather-data-container');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    container.innerHTML = '<div class="loader"></div>';

    try {
        const lat = destination.coordinates[1];
        const lon = destination.coordinates[0];
        const response = await fetch(`http://localhost:3000/api/weather?lat=${lat}&lon=${lon}`);

        if (!response.ok) {
            const errorResult = await response.json();
            throw new Error(errorResult.error || 'No se pudo obtener la información del clima.');
        }

        const weatherData = await response.json();
        renderWeatherData(weatherData, destination.name);

    } catch (error) {
        console.error("Error al obtener el clima:", error);
        container.innerHTML = `<p class="error-message">Lo sentimos, no se pudo cargar la información del clima. Error: ${error.message}</p>`;
    }
}