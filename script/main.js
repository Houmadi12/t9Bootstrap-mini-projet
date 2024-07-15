// Cette partie permet de changer la couleur de navbar lors de scroll
let navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    if(window.scrollY > 70){
        navbar.classList.add('bg-navbar');
    } else {
        navbar.classList.remove('bg-navbar');
    }
});

//****** Carrousel modification
