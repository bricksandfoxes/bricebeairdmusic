function sendEmail(e) {
    e.preventDefault(); // Prevent form submission
    
    const submitBtn = document.getElementById('submitBtn');
    const buttonText = submitBtn.querySelector('.button-text');
    const formContainer = document.getElementById('formContainer');
    const formSuccess = document.getElementById('formSuccess');
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const checkboxes = document.querySelectorAll('.checkbox-input:checked');
    const selectedServices = Array.from(checkboxes).map(cb => cb.value).join(', ');

    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        selected_services: selectedServices || 'None selected',
        website: 'bricebeairdmusic.com'
    };


    emailjs.send("service_mcusd0p", "template_vi20cmr", templateParams)
        .then(() => {
            buttonText.textContent = 'Sent!';

            document.getElementById('successEmail').textContent = templateParams.from_email;
            document.getElementById('successMessage').textContent = templateParams.message;

            setTimeout(() => {
                formContainer.style.display = 'none';
                formSuccess.classList.add('form-success-show');
            }, 1000);
        })
        .catch((error) => {
            console.error("Error sending message:", error);
            buttonText.textContent = 'Error';
            alert("Failed to send the message.");

        })

        .finally(() => {
            submitBtn.disabled = false;
        });

    return false; 
}

contactForm.addEventListener('submit', sendEmail);

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