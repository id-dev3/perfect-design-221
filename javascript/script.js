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