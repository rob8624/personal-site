function fadeIn() {
    const menu = document.querySelector('.menu');
    let opacity = 0
    menu.style.display = 'block';
    menu.style.opacity = opacity;


    let interval = setInterval(function() {
        if (opacity < 1){
            opacity = opacity + 0.1
            menu.style.opacity = opacity
        } else {
            clearInterval(interval)
        }
    }, 100) 
}

function toggleMenu() {
    const headerMenu = document.querySelector('.header-bottom');
    const hamburger = document.querySelector('.hamburger'); 
    headerMenu.classList.toggle('active');
    hamburger.classList.toggle('open');

    if (hamburger.classList.contains('open')){
        fadeIn()
    }
}



