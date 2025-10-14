// Arabic Blue Theme JavaScript

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    const toggle = document.querySelector('.menu-toggle');
    
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggle.setAttribute('aria-label', 'فتح القائمة');
        toggle.innerHTML = '☰';
    } else {
        nav.classList.add('active');
        toggle.setAttribute('aria-label', 'إغلاق القائمة');
        toggle.innerHTML = '✕';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('main-nav');
    const toggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.site-header');
    
    if (!header.contains(event.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggle.setAttribute('aria-label', 'فتح القائمة');
        toggle.innerHTML = '☰';
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    const nav = document.getElementById('main-nav');
    const toggle = document.querySelector('.menu-toggle');
    
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggle.setAttribute('aria-label', 'فتح القائمة');
        toggle.innerHTML = '☰';
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Add loading class
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Back to top button (optional)
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'العودة إلى الأعلى');
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-blue);
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);