// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ----------------------------
// Contact popup code (auto pop on page load)
// ----------------------------
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-popup');

// Function to show popup
function showPopup() {
  popup.classList.add('show');
  overlay.classList.add('show');
}

// Function to hide popup
function hidePopup() {
  popup.classList.remove('show');
  overlay.classList.remove('show');
}

// Show popup automatically when the page loads
window.addEventListener('load', showPopup);

// Close popup events
closeBtn.addEventListener('click', hidePopup);
overlay.addEventListener('click', hidePopup);
