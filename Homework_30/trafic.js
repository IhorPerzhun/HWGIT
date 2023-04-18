var trafficLight = document.querySelector(".traffic-light");
var switchBtn = document.getElementById("switchBtn");

		// Set up an array of the light colors
var lightColors = ["red", "yellow", "green"];
var currentColor = 0;

		// Function to switch the light to the next color
function switchLight() {
			// Remove the current color class
trafficLight.children[currentColor].classList.remove(lightColors[currentColor]);

			// Increment the current color index
currentColor = (currentColor + 1) % lightColors.length;

			// Add the new color class
trafficLight.children[currentColor].classList.add(lightColors[currentColor]);
		}

		// Set up an event listener for the button
switchBtn.addEventListener("click", switchLight);