document.getElementById('#home').scrollIntoView({ behavior: 'smooth' });
document.getElementById('#services').scrollIntoView({ behavior: 'smooth' });
document.getElementById('#testimonials').scrollIntoView({ behavior: 'smooth' });
document.getElementById('#faq').scrollIntoView({ behavior: 'smooth' });
document.getElementById('#portfolio').scrollIntoView({ behavior: 'smooth' });
document.getElementById('#contact').scrollIntoView({ behavior: 'smooth' });

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Smooth Scrollbar
    var scrollbar = new SmoothScrollbar(document.body);
  
    // Enable smooth scrolling for sections
    var sections = document.querySelectorAll('.scroll-section');
    
    sections.forEach(function (section) {
      section.addEventListener('click', function () {
        // Scroll smoothly to the clicked section with a different easing function
        scrollbar.scrollIntoView(section, { easing: 'easeInOutCubic' });
      });
    });
  });
  

