$(document).ready(
    function () {

        /**PROMO*/

        const menuBlock = '.menu__block';
        const menuOverlay = '.menu__overlay';
    $('.promo__btns').on('click','a:not(.btn)',function (){
        $(this).addClass('btn').siblings()
            .removeClass('btn');
    });

    function menuAct(){
        $(menuOverlay).toggleClass('menu__overlay_active');
        $(menuBlock).toggleClass('menu__block_active');
    }


    $('.hamburger').on('click',function (){
       menuAct();
    });
    $('.menu__close').on('click',function (){
       menuAct();
    });

    $(menuOverlay).on('click',function (){
        menuAct();
    });
    $('.menu__link').on('click',function (){
       menuAct();
    });

        // $(window).on('scroll', () => {
        //     const blockPosition = $('.about').offset().top,
        //         windowScrollPosition = $(window).scrollTop();
        //
        //     if( blockPosition < windowScrollPosition ) {
        //         $('.side-panel').css('position','fixed');
        //     } else {
        //         $('.side-panel').css('position','absolute');
        //     }
        // });

        /**PROMO*/

        /**SKILLS*/

        const rates = document.querySelectorAll('.skills__creation-rate'),
            scales = document.querySelectorAll('.skills__creation-scale_active');

        rates.forEach((item,i) =>{
           scales[i].style.width=item.innerHTML;
        });

        /**SKILLS*/

});

// const hamburger = document.querySelector('.hamburger'),
//     menuBlock = document.querySelector('.menu__block'),
//     menuOverlay = document.querySelector('.menu__overlay'),
//     menuClose = document.querySelector('.menu__close');
//
// hamburger.addEventListener('click', () => {
//     menuBlock.classList.add('menu__block_active');
//     menuOverlay.classList.add('menu__overlay_active');
// });
// menuClose.addEventListener('click',() =>{
//    menuBlock.classList.remove('menu__block_active');
//    menuOverlay.classList.remove('menu__overlay_active');
// });
