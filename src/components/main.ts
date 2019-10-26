const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const download = document.querySelector('.download');
    
    burger.addEventListener('click', () => {
        // Toggle Nav    
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animate download
        if (download.style.animation) {
          download.style.animation = '';
        } else {
          download.style.animation = `downloadFade 0.5s ease forwards ${6 / 7 + 0.3}s`;
        }
      
        // Burger Animation
        burger.classList.toggle('toggle');

    });

  }
  
const toTopBtn = document.getElementById("toTopButton");

// When the user scrolls down 1600px from the top of the document, show the button

const scrollFunction = () => {
  if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
     toTopBtn.style.visibility = "visible";
  } else {
    toTopBtn.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
toTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

navSlide();
window.onscroll = () => {scrollFunction()};