// Select elements for responsiveness
const navbar = document.querySelector('nav') as HTMLElement;
const mobileMenuButton = document.createElement('button');
mobileMenuButton.innerText = 'Menu';
mobileMenuButton.classList.add('mobile-menu-btn');
navbar.appendChild(mobileMenuButton);

// Toggle mobile menu function
const toggleMobileMenu = () => {
    navbar.classList.toggle('open');
};

// Responsive menu event listener
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Adjust header on scroll for mobile screens
window.addEventListener('scroll', () => {
    const header = document.querySelector('header') as HTMLElement;
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Function to handle responsive behavior
const handleResponsiveLayout = () => {
    if (window.innerWidth < 768) {
        navbar.classList.add('mobile');
        mobileMenuButton.style.display = 'block';
    } else {
        navbar.classList.remove('mobile', 'open');
        mobileMenuButton.style.display = 'none';
    }
};

// Initial check and resize event listener
handleResponsiveLayout();
window.addEventListener('resize', handleResponsiveLayout);
