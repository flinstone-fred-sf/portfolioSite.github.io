const navSlide = () => {
    const burger = document.querySelector('.nav-icon');
    // const main = document.querySelector('#home');
    const nav = document.querySelector(".links");
    const navLinks = document.querySelectorAll('.links a');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // main.style.display = "none";
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6}s`
        });

        burger.classList.toggle('toggle');


    })

  


}

navSlide();