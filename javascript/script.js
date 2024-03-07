/// Start Typing Effect ///

const typedSpan = document.getElementById("typed")
const toType = ["DIGITAL.", "SERVICES.", "BRANDING.", "CODING."]

const delayTyping_char = 100;
const delayErasing_text = 50;
const delayTyping_text = 800;

let toTypeIndex = 0;
let charIndex = 0;

function typeText() {
	if (charIndex < toType[toTypeIndex].length) {
		typedSpan.textContent += toType[toTypeIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeText, delayTyping_char);
	}
	else {
		setTimeout(eraseText, delayTyping_text);
	}
}

function eraseText() {
	if (charIndex > 0) {
		typedSpan.textContent = toType[toTypeIndex].substring(0, charIndex-1);
		charIndex = charIndex-1;
		setTimeout(eraseText, delayErasing_text);
	}
	else {
		toTypeIndex++;

		if (toTypeIndex >= toType.length)
			toTypeIndex = 0;
			setTimeout(typeText, delayTyping_text);
	}
}

window.onload = function() {
	if (toType[toTypeIndex].length) setTimeout(typeText, delayTyping_text);
}

/// End Typing Effect ///


/// Start Slider Effect ///

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".third-container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

/// End Slider Effect ///


/// Start Hamburger Menu ///

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerCheckbox = document.querySelector(".hamburger input");
    const navLinks = document.querySelector(".nav-links");

    hamburgerCheckbox.addEventListener("change", function () {
        if (this.checked) {
            navLinks.style.display = "block";
            document.body.style.overflow = "hidden";
            navLinks.classList.add("show");
        } else {
            navLinks.style.display = "none";
            document.body.style.overflow = "auto";
            navLinks.classList.remove("show");
        }
    });
});

/// End Hamburger Menu ///