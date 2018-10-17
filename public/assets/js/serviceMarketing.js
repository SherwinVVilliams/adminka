$(function () {
    check_input();
});

function formValid() {
    var e = 0,
        i = $(".service-marketing-block2 .wrapForChecked").length;
    if ($(".service-marketing-block2 .wrapForChecked").each(function() {
            $(this).find("input").is(":checked") && e++
        }), e > 0) return $(".service-marketing-block2 .container p").removeClass("inv"), $(".brif-popUp4").find("p > span.checkedItems").text(e), $(".brif-popUp4").find("p > span.allItems").text(i), $(".brif-popUp4").addClass("mark-popup"), $(".brif-popUp4").bPopup(), !1;
    $(".service-marketing-block2 .container p").addClass("inv");
    var r = ".service-marketing-block2",
        n = $(r).offset().top;
    return $("body,html").animate({
        scrollTop: n
    }, 500), !1
}

function serviceMarketingForms() {
    $(".brif-popUp19 form").aSendForm({
        popup: [".brif-popUp19", ".service-marketing-block2 .container .brif-popUp-btn"],
        goal: goal,
        closeData: 113e3,
        associations: form_name,

        validateRuls: form_ruls,
        onClickForm: function () {
            var type = $('.brif-popUp19 .chek_brif:checked').data('val');
            $('.download_brifs__'+type)[0].click();
        },
    });

    $(".service-marketing-block2 .container .landing-btn").click(function() {
        return formValid()
    });

    $(".brif-popUp4 form").aSendForm({
        goal: goal,
        popup: ['.brif-popUp4', ''],
        closeData: 113e3,
        associations: form_name,

        validateRuls: form_ruls,
        onClickForm: function() {
            var e = [];
            return e.push({
                title: "Страница",
                data: "МАРКЕТИНГ И СОПРОВОЖДЕНИЕ"
            }), $(".service-marketing-block2 .wrapForChecked").each(function() {
                if ($(this).find("input").is(":checked")) var i = $(this).find("label").text();
                e.push({
                    title: "Нам нужно ",
                    data: i
                })
            }), e
        },
        answer: function () {
            $('#answer').bPopup();
        },
    })
}
$(function() {
    serviceMarketingForms()
});


function check_input() {
    $('input[type=radio]').change(function () {
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
};