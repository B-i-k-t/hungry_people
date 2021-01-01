
// slider

let slideIndex = 1;
showSlides(slideIndex);
 
 
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}
 
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
 
/* Устанавливает текущий слайд */
function currentxSlide(n) {
    showSlides(slideIndex = n);
}
 
/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__item");
    let dots = document.getElementsByClassName("slider__dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// menu

let menuIndex = 2;
showMenus(menuIndex);
 
/* Устанавливает текущий слайд */
function currentxMenu(n) {
    showMenus(menuIndex = n);
}
 
/* Основная функция слайдера */
function showMenus(n) {
    let i;
    let menu = document.getElementsByClassName("menu__list");
    let link = document.getElementsByClassName("menu__link");
    for (i = 0; i < menu.length; i++) {
        menu[i].style.display = "none";
    }
    for (i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace(" active_link", "");
    }
    menu[menuIndex - 1].style.display = " -webkit-box";
    menu[menuIndex - 1].style.display = " -ms-flexbox";
    menu[menuIndex - 1].style.display = " flex";
    link[menuIndex - 1].className += " active_link";
}