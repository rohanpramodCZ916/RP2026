// Copy hex color on swatch click
document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
        const hex = swatch.querySelector('.swatch-hex').dataset.hex;
        navigator.clipboard.writeText(hex).then(() => {
            const toast = document.getElementById('toast');
            toast.textContent = `Copied ${hex}`;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        });
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.brand-card, .tone-card, .color-swatch, .photo-placeholder, .type-showcase').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
