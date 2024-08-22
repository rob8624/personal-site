function toggleMenu() {

    const headerMenu = document.querySelector('.header-bottom');
    headerMenu.classList.toggle('active');
    const hamburger = document.querySelector('.hamburger');
    if (headerMenu.classList.contains('active')) {
        hamburger.innerText = '\\'; // Change to ||| when active
    } else {
        hamburger.innerText = '/'; // Change to /// when not active
    }
}