 const navSlide = () => {
     const button = document.querySelector(".Nav-button");
     const nav = document.querySelector('.nav-links');
     const navLinks = document.querySelectorAll('.nav-links li');
     //toggle nav

     button.addEventListener('click',()=>{
     nav.classList.toggle('navbar-active');
         //Animate links
     navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s ';
        }
     });
     });
 }
navSlide(); 