$(function () {
    miniSliderBlock1();
    indexBlock3();
    indexBlock4();
    indexBlock7Sliders();
    forms();
    slowScroll();
    cloud_Paralax();
    check_input();
    AOS.init({
        offset: 200,
        disable: 'mobile'
    });
    particles();
});

function particles() {
    particlesJS.load('particles-js__main', '/assets/js/particlesjs-portfolio.json', function() {
        console.log('callback - particles.js config loaded');
    });
}

function cloud_Paralax() {
    var parallax_second = document.getElementById('parallax_second');
    new Parallax(parallax_second);

    var parallax_first = document.getElementById('parallax');
    var parallaxInstance = new Parallax(parallax_first);
    parallaxInstance.limit(false, 1)
}

//*popUp скачать бриф проверка на checked
function check_input() {
    $('input[type=radio]').change(function () {
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
};

//*popUp скачать бриф проверка на checked


function slowScroll() {
    $('.index-block1 .container .to-block2').click(function (event) {
        event.preventDefault();
        var id = "#block2",
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    });
};

function indexBlock3() {
    // при запуску
    $(".index-block3 .container .part").each(function () {
        var thisActive = $(this).find(".item.active").length;
        if (thisActive > 0) {
            var thisIndex = $(this).index(),
                slideIndex = $(".index-block3 .block3-slide-wrapper .slide").eq(thisIndex);
            slideIndex.addClass("displayBlock");
        }
    });
    //
    $(".index-block3 .container .part").click(function () {
        $(this).parent().find(".item.active").removeClass("active");
        $(this).find(".item").addClass("active");

        var thisActive = $(this).find(".item.active").length;
        if (thisActive > 0) {
            var thisIndex = $(this).index(),
                slideIndex = $(".index-block3 .block3-slide-wrapper .slide").eq(thisIndex);
            $(".index-block3 .block3-slide-wrapper .slide").removeClass("displayBlock");
            slideIndex.addClass("displayBlock");
        }
    });

    $(".index-block3 .block3-slide-wrapper .slide .right-part .pages span").click(function () {
        $(this).parent().find("span.active").removeClass("active");
        $(this).addClass("active");

        var thisIndex = $(this).index(),
            partsIndex = $(this).parents(".right-part").find(".parts").eq(thisIndex);
        $(this).parents(".right-part").find(".parts").addClass("displayNone");
        partsIndex.removeClass("displayNone");
    });
};


function indexBlock4() {
    /*    fn = function () {
            var winBr = $(window).width();
            if ((getScrollBarWidth() + winBr) < 992) {
                $(".index-block4 .portfolio-wrapper .content").css("height", $(".index-block4 .portfolio-wrapper .content").width() / 2 * 2);
            } else {
                $(".index-block4 .portfolio-wrapper .content").css("height", $(".index-block4 .portfolio-wrapper .content").width() / 6 * 3);
            }
        };
        $(window).resize(fn);
        fn();*/

    /*$(".index-block4 .portfolio-wrapper .content .part .mask button").click(function () {
        var winBr = $(window).width(),
            href = $(this).parent().data("href"),
            popUp = $(".portfolio-popUp");
        if ((getScrollBarWidth() + winBr) > 799) {
            popUp.bPopup()
            popUp.find("iframe").attr("src", href);
        } else {
            window.open(href, '_blank');
        }
    });*/
};


function indexBlock7Sliders() {
    $(".index-block7-slider1,.index-block7-slider2").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 400,
        items: 1
    });
};


function miniSliderBlock1() {
    var timeLine = $(".index-block1 .container .slider-wrapper .time");
    $("#mini-slider").owlCarousel({
        autoplay: 3000,
        // autoHeight: true,
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 400,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    timeLine.animate({
        width: "100%"
    }, 3000, function () {
    });
    $("#mini-slider").on('changed.owl.carousel', function (event) {
        timeLine.stop()
        timeLine.width("0%");
        timeLine.animate({
            width: "100%"
        }, 3000, function () {
        });
    })
};


function forms() {
    $(".index-block9 .container form").aSendForm({
        goal: goal,

        closeData: 113000,
        associations: form_name,
        answer: function () {
            $('#answer').bPopup();
        },
        validateRuls: form_ruls,
    });


    $(".brif-popUp2 form").aSendForm({
        popup: ['.brif-popUp2', '.index-block2 .container button'],
        goal: goal,
        closeData: 113000,
        associations: form_name,
        answer: function () {
            $('#answer').bPopup();
        },
        validateRuls: form_ruls,
    });


    $(".brif-popUp8 form").aSendForm({
        popup: ['.brif-popUp8', '.index-block1 .container .pred-btn'],
        goal: goal,

        closeData: 113000,
        associations: form_name,
        answer: function () {
            $('#answer').bPopup();
        },
        validateRuls: form_ruls,
    });
    $(".brif-popUp12 form").aSendForm({
        popup: ['.brif-popUp12', '.index-block3 .block3-slide-wrapper .displayBlock .row .right-part .web-send'],
        goal: goal,

        closeData: 113000,
        associations: form_name,
        answer: function () {
            $('#answer').bPopup();
        },
        validateRuls: form_ruls,
    });
    $(".brif-popUp11 form").aSendForm({
        popup: ['.brif-popUp11', '.index-block3 .block3-slide-wrapper .slide3 .row .right-part .marketting'],
        goal: goal,

        closeData: 113000,
        associations: form_name,
        answer: function () {
            $('#answer').bPopup();
        },
        validateRuls: form_ruls,
    });
    $(".brif-popUp13 form").aSendForm({
        popup: ['.brif-popUp13', '.index-block3 .block3-slide-wrapper .slide4 .row .right-part .dizain'],
        goal: goal,

        closeData: 113000,
        associations: form_name,
        validateRuls: form_ruls,
        answer: function () {
            $('#answer').bPopup();
        },
    });
}

