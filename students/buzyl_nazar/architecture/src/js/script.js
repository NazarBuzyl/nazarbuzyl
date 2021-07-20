import $ from 'jquery';
import '../../node_modules/lightbox2/dist/js/lightbox-plus-jquery';
import './slider';


// see more
// function 
const htmlGallery = `
<div class="col-6 col-xl-12">
    <div class="row gallery__row">
        <a href="image/gallery_photo04.jpg" data-lightbox="gallery-list-photo" class="gallery__link">
            <img src="image/gallery_photo02.jpg" alt="photo 2" class="gallery__photo gallery__photo_left">
        </a>
        <a href="image/gallery_photo05.jpg" data-lightbox="gallery-list-photo" class="gallery__link">
            <img src="image/gallery_photo03.jpg" alt="photo 3" class="gallery__photo">
        </a>
    </div>
</div>
<div class="col-6 col-xl-12">
    <div class="row gallery__row">
        <a href="image/gallery_photo04.jpg" data-lightbox="gallery-list-photo" class="gallery__link">
            <img src="image/gallery_photo04.jpg" alt="photo 4" class="gallery__photo gallery__photo_left">
        </a>
        <a href="image/gallery_photo05.jpg" data-lightbox="gallery-list-photo" class="gallery__link">
            <img src="image/gallery_photo05.jpg" alt="photo 5" class="gallery__photo">
        </a>
    </div>
</div>
`
seeMore.addEventListener("click", function () {
    document.getElementById('more-photo').classList.add('active-flex');
    $('#more-photo').append(htmlGallery);
    // document.getElementById('seeMore').classList.add('display-none');
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

});