const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuProductDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleIconMenu);
menuCarritoIcon.addEventListener('click', toggleProductDetail);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function  toggleIconMenu(){
    mobilMenu.classList.toggle('inactive');
}
function toggleProductDetail(){
    menuProductDetail.classList.toggle('inactive');
}