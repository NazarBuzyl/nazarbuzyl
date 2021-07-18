// see more
seeMore.addEventListener("click", function () {
    document.getElementById('more-photo').classList.add('active-flex');
    document.getElementById('seeMore').classList.add('display-none');
});

// btn burger
let btn = document.querySelector('#burgerMenuBtnItem');
btn.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
    document.querySelector('#menu').classList.toggle('malibu');
});

// scroll
let scroll = document.querySelector('#scroll');
scroll.addEventListener('click', function () {
    
})
// // Splide
// new Splide( '.splide' ).mount();