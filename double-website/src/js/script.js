import $ from 'jquery';
import './weather';
import './cocktail';

// header
let btn = document.querySelector('#burgerMenuBtnItem');

btn.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
});

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function scrollTop() {
    $('.link-to-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: $('#top').offset().top
        }, 1000);
        return false;
    });
}

function showTopScroll() {
    if (pageYOffset > 500) {
        document.getElementById('showScroll').classList.add('scroll-active');
    } else {
        document.getElementById('showScroll').classList.remove('scroll-active');
    }
}

function showHeaderMenu() {
    if (pageYOffset > 200) {
        document.getElementById('header').classList.add('menu-active');
    } else {
        document.getElementById('header').classList.remove('menu-active');
    }
}
scrollTop();
setInterval(showTopScroll, 100);
setInterval(showHeaderMenu, 100);

// $(function ($) {
//     $(document).mouseup(function (e) {
//         let div = $("#menuList");
//         if (!div.is(e.target) &&
//             div.has(e.target).length === 0) {
//             $("#burgerMenuBtn").prop('checked', false);
//             document.documentElement.classList.toggle('menu-open');
//         }
//     });
// });