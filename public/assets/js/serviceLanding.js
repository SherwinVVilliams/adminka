$(function () {
    check_input();
    serviceLandingForms();
});

function formValid() {
    var e = 0,
        i = $(".service-landing-block2 .wrapForChecked").length;
    if ($(".service-landing-block2 .wrapForChecked").each(function () {
            $(this).find("input").is(":checked") && e++
        }), e > 0) return $(".service-landing-block2 .container p").removeClass("inv"), $(".brif-popUp4").find("p > span.checkedItems").text(e), $(".brif-popUp4").find("p > span.allItems").text(i), $(".brif-popUp4").addClass("land-popup"), $(".brif-popUp4").bPopup(), !1;
    $(".service-landing-block2 .container p").addClass("inv");
    var n = ".service-landing-block2",
        a = $(n).offset().top;
    return $("body,html").animate({
        scrollTop: a
    }, 500), !1
}

function serviceLandingForms() {
    $(".service-landing-block2 .container .landing-btn").click(function () {
        return formValid();

    });
    $(".brif-popUp4 form").aSendForm({
        goal: goal,
        popup: ['.brif-popUp4', ''],

        closeData: 113e3,
        associations: form_name,

        validateRuls: form_ruls,
        onClickForm: function () {
            var e = [];
            return e.push({
                title: "Страница",
                data: "СОЗДАНИЕ LANDING PAGE"
            }), $(".service-landing-block2 .wrapForChecked").each(function () {
                if ($(this).find("input").is(":checked")) var i = $(this).find("label").text();
                e.push({
                    title: "Нам нужно ",
                    data: i
                })
            }), e
        },
        answer: function () {
            $('#answer').bPopup();
        }
    })
}

function check_input() {
    $('input[type=radio]').change(function () {
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
};