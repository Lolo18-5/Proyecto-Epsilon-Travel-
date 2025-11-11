export class BackgroundSlider {
    constructor(container, images) {
        this.container = container;
        this.images = images;
        this.currentIndex = 0;
        this.slides = [];
        this.dots = [];
        this.init();
    }
    
    init() {
        this.createDots();
        this.preloadImages().then(() => {
            this.createSlides();
            this.showSlide(0);
            this.startSlider();
        }).catch(error => {
            console.error('Error loading images:', error);
        });
    }
    
    createDots() {
        const dotsContainer = document.querySelector('.pagination-dots');
        this.images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.dataset.index = index;
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
    }
    
    updateDots(index) {
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    preloadImages() {
        const promises = this.images.map(src => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });
        return Promise.all(promises);
    }
    
    createSlides() {
        this.images.forEach((src, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.style.backgroundImage = `url(${src})`;
            this.container.appendChild(slide);
            this.slides.push(slide);
        });
    }
    
    showSlide(index) {
        this.currentIndex = index;
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.slides[index].classList.add('active');
        this.updateDots(index);
    }
    
    goToSlide(index) {
        clearInterval(this.interval);
        this.showSlide(index);
        this.startSlider();
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showSlide(this.currentIndex);
    }
    
    startSlider() {
        this.interval = setInterval(() => this.nextSlide(), 5000);
    }
}