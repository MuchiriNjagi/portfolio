// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop - 50,
        });
    });
});

// Handling form submission (assuming contact form with id="contact")
document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Example: Log form data to the console
    for (let [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
    }

    // Here, you can perform AJAX requests to send form data to the server-side script (e.g., contact.php)
    // Replace the above console.log with your own code to handle form submission
});