document.querySelector('.lang-btn').addEventListener('click', function() {
    document.querySelector('.lang-dropdown').style.display = 'block';
});
window.onclick = function(event) {
    if (!event.target.matches('.lang-btn')) {
        var dropdowns = document.getElementsByClassName("lang-dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};
document.getElementById('getDirections').addEventListener('click', function(e) {
    e.preventDefault();
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.open('https://maps.google.com/maps?daddr=Warszawa,+Grójecka+39', '_blank');
    } else {
        window.open('https://www.google.com/maps/place/Warszawa,+Grójecka+39', '_blank');
    }
});
document.querySelector('.location-switcher').addEventListener('mouseenter', function() {
    const dropdown = document.querySelector('.location-dropdown');
    dropdown.style.display = 'block';
    setTimeout(() => dropdown.style.opacity = 1, 0);
});

document.querySelector('.location-switcher').addEventListener('mouseleave', function() {
    const dropdown = document.querySelector('.location-dropdown');
    dropdown.style.opacity = 0;
    setTimeout(() => dropdown.style.display = 'none', 500);
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const reviews = document.querySelectorAll('.review');
    reviews.forEach(review => {
        const clone = review.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        carousel.appendChild(clone);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    const targetPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = targetPosition + window.pageYOffset - 0;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});