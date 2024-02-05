let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger-active');

  menu.classList.toggle('header__nav-active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(elem){

  elem.addEventListener('click', function() {

    burger.classList.remove('burger-active');

    menu.classList.remove('header__nav-active');

    document.classList.remove('stop-scroll');
  })
})


let search = document.querySelector('.header__nav-btn');
let searchBtn = document.querySelector('.header__search');
let closeSercg = document.querySelector('.close-btn');

search.addEventListener('click',
function() {
  searchBtn.classList.add('header__search-acive');
}
)

closeSercg.addEventListener('click',
  function() {
    searchBtn.classList.remove('header__search-acive');
  }
)



let tabsBtn = document.querySelectorAll('.work__item-btn');
let tabsItem = document.querySelectorAll('.work__block');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('work-active-btn')});
    e.currentTarget.classList.add('work-active-btn');

    tabsItem.forEach(function(element){ element.classList.remove('work__block-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__block-active');
  });
});



const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});



  new Accordion('.questions__list', {
    elementClass: 'questions__item',
    triggerClass: 'questions__btn',
    panelClass: 'questions__content',
    activeClass: 'questions-active'
  });











