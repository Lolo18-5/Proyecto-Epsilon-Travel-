import { imagePaths } from './config.js';
import { BackgroundSlider } from './slider.js';

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.background-slider');
    const slider = new BackgroundSlider(sliderContainer, imagePaths);
    
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        console.log('Navegando al sitio principal...');
    });
});