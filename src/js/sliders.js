const navItems = document.querySelectorAll('.nav-item');
const slides = document.querySelectorAll('.slide');
const lines = document.querySelectorAll('.nav-line');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));

        // Hide all slides
        slides.forEach(slide => slide.style.display = 'none');
        
        // Reset lines
        lines.forEach(line => line.style.width = '100px');

        // Show the clicked slide
        slides[index].style.display = 'block';
        
        // Animate line
        lines[index].style.width = '100%';  // or whatever value to match the design
    });
});
