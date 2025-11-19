function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    mobileNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'hidden'; // Keep your existing overflow settings
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    mobileNav.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = 'hidden'; // Keep your existing overflow settings
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileNav.classList.contains('active') && 
        !mobileNav.contains(event.target) && 
        !menuToggle.contains(event.target)) {
        closeMobileMenu();
    }
});