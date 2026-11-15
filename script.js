// Sample data (using Object and Array as required)
const petData = {
    "rescue-cat-1": { name: "Bella", type: "Cat" },
    "rescue-dog-1": { name: "Buster", type: "Dog" }
};
let savedFavorites = JSON.parse(localStorage.getItem('savedFavorites')) || [];

// 1. Save Favorite Feature (Interactivity & Storage)
function toggleFavorite(petId, btnElement) {
    const banner = document.getElementById('notification-banner');
    
    // Save to favorites if not already saved
    if (!savedFavorites.includes(petId)) {
        savedFavorites.push(petId);
        localStorage.setItem('savedFavorites', JSON.stringify(savedFavorites));
        btnElement.innerHTML = "❤️ Favorited!";
        btnElement.style.backgroundColor = "#F7B05B";
        
        // Show confirmation banner
        banner.textContent = `${petData[petId].name} saved to favorites!`;
        banner.style.display = "block";
        setTimeout(() => { banner.style.display = "none"; }, 3000);
    }
}

// 2. Load stored data on page load
window.onload = function() {
    if (document.getElementById('cat-fav-btn')) {
        if (savedFavorites.includes('rescue-cat-1')) {
            let btn = document.getElementById('cat-fav-btn');
            btn.innerHTML = "❤️ Favorited!";
            btn.style.backgroundColor = "#F7B05B";
        }
    }
}

// 3. Form Validation Feature
function validateForm(event) {
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    let isValid = true;

    // Reset error messages
    emailError.style.display = "none";
    messageError.style.display = "none";

    // Validate Email format
    if (!emailInput.value.includes('@') || emailInput.value.trim() === "") {
        emailError.style.display = "block";
        emailError.textContent = "Please enter a valid email address containing an @ symbol.";
        isValid = false;
    }

    // Validate Message length
    if (messageInput.value.trim().length < 10) {
        messageError.style.display = "block";
        messageError.textContent = "Please tell us a bit more! (Minimum 10 characters).";
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault(); 
    }
}

// Attach event listener to the contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
}
