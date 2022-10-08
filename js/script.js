$(document).ready(
    function () {
    $('.promo__btns').on('click','a:not(.btn)',function (){
        $(this).addClass('btn').siblings()
            .removeClass('btn');
    });
});