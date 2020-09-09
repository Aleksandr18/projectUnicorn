$(document).ready(function(){

    $('.owl-curse').owlCarousel({
        loop:true,
        autoplay: 3000,
        margin:24,
        nav:true,
        autoWidth: true,
        responsiveClass:true,
    });


    document.querySelector('.burger').addEventListener('click', function(){
        document.querySelector('.burger span').classList.toggle('active');
    })

    $(document).on("click", '.burger', function () {
        $(this).toggleClass('show');
        $(".nav-h").toggleClass('show');
        $(".menu").toggleClass('show');
        $(".headerParent").toggleClass('show');
        $('body').toggleClass('modal-open');

    });


    $(function() {
        let header = $("header");
        let scrollPos = $(window).scrollTop();


        $(window).on("scroll load", function() {

            scrollPos = $(this).scrollTop();

            if(scrollPos > 1) {
                header.addClass("fixed")
            } else {
                header.removeClass("fixed");
            }
        });
    });
});







