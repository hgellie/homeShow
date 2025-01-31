let slideIndex = 1;

// Show slides when page loads and start avatar animation
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    animateAvatar();
});

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    
    // Loop back to first slide if we go past the end
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Loop to last slide if we go before the first
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the current slide
    slides[slideIndex-1].style.display = "block";
}

// Add avatar animation
function animateAvatar() {
    const avatar = document.querySelector('.avatar-image');
    const speechBubble = document.querySelector('.speech-bubble');
    
    if (avatar && speechBubble) {
        // Set welcome message
        speechBubble.textContent = "Welcome to our home tour! Click through to see our beautiful homes.";
    }
}

// Auto advance slides every 5 seconds
setInterval(function() {
    changeSlide(1);
}, 5000);
