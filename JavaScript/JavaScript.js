// Toggle nav for mobile
const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault();
      alert("Your submission has been received! Thank you for joining Naawi-Oodena 🌿");
      this.reset(); // Optional: Clears the form after submission
    });