document.addEventListener
(
	"DOMContentLoaded",
	function()
	{
		let slideIndex = 0; // Start with the first slide (0)
		showSlides(); // Show the first slide

		window.plusSlides = function(n) { // Expose plusSlides to the global scope
			slideIndex += n; // Update slideIndex
			showSlides(); // Show the updated slide
		};

		function showSlides()
		{
			const slides = document.getElementsByClassName("mySlides");

			if (slides.length === 0)
			{
				console.error("No slides found!");
				return;
			}

			if (slideIndex >= slides.length) { slideIndex = 0; }
			if (slideIndex < 0) { slideIndex = slides.length - 1; }

			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}

				slides[slideIndex].style.display = "block";
		}
	}
);