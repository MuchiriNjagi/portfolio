/*======toggle icon navbar======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const multipleText = document.getElementById('multiple-text');
    const texts = ["Developer", "Data Analyst", "Tech Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
        if (textIndex < texts.length) {
            if (!isDeleting && charIndex < texts[textIndex].length) {
                // Typing
                currentText += texts[textIndex].charAt(charIndex);
                charIndex++;
                multipleText.textContent = currentText;
                setTimeout(type, 100);
            } else if (isDeleting && charIndex > 0) {
                // Deleting
                currentText = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                multipleText.textContent = currentText;
                setTimeout(type, 50);
            } else {
                // Finished typing or deleting
                if (!isDeleting) {
                    isDeleting = true;
                    setTimeout(type, 1000); // Pause before starting to delete
                } else {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length; // Move to the next text
                    currentText = "";
                    charIndex = 0;
                    setTimeout(type, 500); // Pause before typing the next text
                }
            }
        }
    }

    type();
});


/*======scroll sections active link======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let ofsett = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= ofsett && top < ofsett + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*======sticky navbar======*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    /*======remove toggle icon and  navbar when clicl navbar link======*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

/*======scroll reveal======*/
scrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

scrollReveal().reveal('.home-content, .heading', { origin: 'top' });
scrollReveal().reveal('.home-img, .services-container, ,portfolio-box, .contact form', { origin: 'bottom' });
scrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
scrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// script.js