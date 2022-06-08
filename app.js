const nav = document.getElementsByTagName('nav')[0];
const navList = document.getElementsByClassName('nav-list')[0];
const navIcon = document.getElementsByClassName('mobile-menu-toggle')[0];

navIcon.addEventListener('click', function() {
    console.log('clicked');
    nav.classList.toggle('clicked');
    navList.classList.toggle('clicked');
    navIcon.classList.toggle('clicked');
});