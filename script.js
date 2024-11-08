// Select elements for responsiveness
var navbar = document.querySelector('nav');
var mobileMenuButton = document.createElement('button');
mobileMenuButton.innerText = 'Menu';
mobileMenuButton.classList.add('mobile-menu-btn');
navbar.appendChild(mobileMenuButton);
// Toggle mobile menu function
var toggleMobileMenu = function () {
    navbar.classList.toggle('open');
};
// Responsive menu event listener
mobileMenuButton.addEventListener('click', toggleMobileMenu);
// Adjust header on scroll for mobile screens
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});
// Function to handle responsive behavior
var handleResponsiveLayout = function () {
    if (window.innerWidth < 768) {
        navbar.classList.add('mobile');
        mobileMenuButton.style.display = 'block';
    }
    else {
        navbar.classList.remove('mobile', 'open');
        mobileMenuButton.style.display = 'none';
    }
};
// Initial check and resize event listener
handleResponsiveLayout();
window.addEventListener('resize', handleResponsiveLayout);
