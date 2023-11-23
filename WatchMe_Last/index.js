function changeSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll(".slider-content img");
    let currentIndex = 0;

    // Find the currently visible slide
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === "block") {
            currentIndex = i;
            break;
        }
    }

    // Hide the current slide
    slides[currentIndex].style.display = "none";

    // Calculate the next slide index
    let nextIndex = (currentIndex + direction + slides.length) % slides.length;

    // Show the next slide
    slides[nextIndex].style.display = "block";
}
