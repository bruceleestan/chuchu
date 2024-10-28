document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0; // Start with the first slide (0)
  showSlides(); // Show the first slide

  window.plusSlides = function(n) { // Expose plusSlides to the global scope
      slideIndex += n; // Update slideIndex
      showSlides(); // Show the updated slide
  };

  function showSlides() {
      const slides = document.getElementsByClassName("mySlides");

      // Check if slides are found
      if (slides.length === 0) {
          console.error("No slides found!");
          return; // Exit if no slides are found
      }

      // Wrap around if the index goes out of bounds
      if (slideIndex >= slides.length) { slideIndex = 0; }
      if (slideIndex < 0) { slideIndex = slides.length - 1; }

      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; // Hide all slides
      }

      // Show the current slide
      slides[slideIndex].style.display = "block"; // Display current slide
      console.log("Current slide index:", slideIndex); // Debugging log
  }
});