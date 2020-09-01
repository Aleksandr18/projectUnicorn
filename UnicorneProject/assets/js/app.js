$(document).ready(function(){

    $('.owl-curse').owlCarousel({
        loop:false,
        margin:24,
        nav:true,
        autoWidth: true,
        responsiveClass:true,
        responsive: {

            300: {
                items: 1,
                nav: false,
                loop: true,
                autoplay: true
            },

            540: {
                loop: true,
                items: 1,
                nav: false,

            },
            1200: {
                items: 3,
                nav: true

            },
        }
    });

    // $(function() {
    //
    //     let nav = $("#nav-h");
    //
    //     let navToggle = $("#navToggle");
    //     navToggle.on("click", function() {
    //
    //         event.preventDefault();
    //         nav.toggleClass("show");
    //
    //
    //     });
    // });

    document.querySelector('.burger').addEventListener('click', function(){
        document.querySelector('.burger span').classList.toggle('active');
    })

    $(document).on("click", '.burger', function () {
        $(this).toggleClass('show');
        $(".nav-h").toggleClass('show');
        $('body').toggleClass('modal-open');

    });


    $(function() {
        let header = $("#header");
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







