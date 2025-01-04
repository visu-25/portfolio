// Smooth Scroll Animation
const links = document.querySelectorAll('.navbar ul li a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust scroll position (fixed navbar)
            behavior: 'smooth'
        });
    });
});
