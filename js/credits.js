document.addEventListener('DOMContentLoaded', () => {
    const creditsToggle = document.querySelector('.credits-toggle');
    const creditsPanel = document.querySelector('.credits-panel');
    
    creditsToggle.addEventListener('click', () => {
        creditsPanel.classList.toggle('active');
        creditsToggle.querySelector('i').style.transform = creditsPanel.classList.contains('active') 
            ? 'rotate(180deg)' 
            : 'rotate(0deg)';
    });
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!creditsPanel.contains(e.target) && e.target !== creditsToggle && !creditsToggle.contains(e.target)) {
            creditsPanel.classList.remove('active');
            creditsToggle.querySelector('i').style.transform = 'rotate(0deg)';
        }
    });
});