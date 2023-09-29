/*############# toggle icon navbar ######################*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*############# scroll sections active link #################*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* ############# Sticky navbar ##############*/
    let header = document.querySelector ('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ############# remove toggle icon and navbar when click navbar link scroll ##############*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* ############# scroll reveal ##############*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*################# typed js ######################*/
    const typed = new Typed('.multiple-text',{
        strings: ['Software Engineer', 'system administrator', 'Network engineer', 'Business Process Analyst'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });


    function sendEmail(event) {
        // Prevent the form from submitting
        event.preventDefault();
    
        // Get the form data
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;
    
        // Send the email using EmailJS
        emailjs.send('service_4li32at', 'template_th0yens', {
            from_name: fullName,
            from_email: email,
            from_phone: phoneNumber,
            message_subject: subject,
            message: message
        })
        .then(function(response) {
            // Reset the form
            document.getElementById('contactForm').reset();
            alert('Your message has been sent successfully!');
        })
        .catch(function(error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending your message. Please try again.');
    
            // Log the error message in the browser console
            console.error('EmailJS Error:', error);
        });
    }
    