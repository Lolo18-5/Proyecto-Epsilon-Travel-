// js/modules/filterModule.js
import { destinations } from './destinations.js';
import { updateMarkers } from './mapModule.js';

let allActivities = [];

function getUniqueActivities() {
    const activitySet = new Set();
    destinations.forEach(dest => {
        dest.activities.forEach(activity => activitySet.add(activity));
    });
    allActivities = Array.from(activitySet).sort();
}

function populateFilterOptions() {
    const container = document.getElementById('filter-options');
    container.innerHTML = allActivities.map(activity => `
        <div class="filter-option">
            <input type="checkbox" id="filter-${activity}" name="activity" value="${activity}">
            <span class="custom-checkbox"><i class="fas fa-check"></i></span>
            <label for="filter-${activity}">${activity}</label>
        </div>
    `).join('');

    // Añadir event listeners para que el click en el div también marque el checkbox
    document.querySelectorAll('.filter-option').forEach(optionDiv => {
        optionDiv.addEventListener('click', (e) => {
            // Evitar doble evento si se hace click directo en el label/checkbox
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') {
                const checkbox = optionDiv.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
            }
        });
    });
}

function applyFilters() {
    const selectedActivities = Array.from(document.querySelectorAll('#filter-options input:checked'))
                                    .map(input => input.value);

    if (selectedActivities.length === 0) {
        updateMarkers(destinations); // Muestra todos si no hay filtro
        return;
    }

    const filteredDestinations = destinations.filter(dest => 
        selectedActivities.some(activity => dest.activities.includes(activity))
    );
    
    updateMarkers(filteredDestinations);
    
    // Cierra el detalle si el destino actual ya no está visible
    const detailSection = document.querySelector('.destination-detail');
    const currentDetailId = detailSection.querySelector('.detail-container')?.dataset.id;
    if (detailSection.classList.contains('active') && !filteredDestinations.some(d => d.id === currentDetailId)) {
        detailSection.classList.remove('active');
    }
}

function resetFilters() {
    document.querySelectorAll('#filter-options input:checked').forEach(input => input.checked = false);
    updateMarkers(destinations);
}

export function setupFilters() {
    getUniqueActivities();
    populateFilterOptions();

    const filterBtn = document.querySelector('.filter-btn');
    const filterModal = document.querySelector('.filter-modal');
    const closeFilterBtn = document.querySelector('.close-filter');
    const applyBtn = document.getElementById('apply-filters-btn');
    const resetBtn = document.getElementById('reset-filters-btn');

    filterBtn.addEventListener('click', () => {
        filterModal.classList.add('active');
    });

    closeFilterBtn.addEventListener('click', () => {
        filterModal.classList.remove('active');
    });

    filterModal.addEventListener('click', (e) => {
        if (e.target === filterModal) {
            filterModal.classList.remove('active');
        }
    });

    applyBtn.addEventListener('click', () => {
        applyFilters();
        filterModal.classList.remove('active');
    });

    resetBtn.addEventListener('click', () => {
        resetFilters();
        filterModal.classList.remove('active');
    });
}