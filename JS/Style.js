document.addEventListener("DOMContentLoaded", function() {
  // Toggle menu icon and navbar
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
  };

  // Update active navigation link based on scroll position
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
        });
        document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
      }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');
  });

  // Initialize scrollReveal
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
  });

  // Reveal animations
  ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
  });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
  });
  ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
  });

  // Initialize Typed.js
  const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer'],
    typeSpeed: 100,
    loop: true
  });

  // Show full content on "ReadMore" button click
  var btn = document.querySelector(".btn");
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");

  btn.addEventListener("click", function() {
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btn.textContent = "ReadMore";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btn.textContent = "ReadLess";
    }
  });
});

  
