$(function () {
    serviceForms();
    check_input();
});

function serviceForms() {
    $(".brif-popUp3 form").aSendForm({
        popup: [".brif-popUp3", ".service-block2 .wrapper-parts .part .container .konsult-popUp-button"],
        goal: goal,
        closeData: 113e3,
        associations: form_name,

        validateRuls: form_ruls,
        onClickPopup: function () {
            buttonText = $(this).text(), title = $(this).parents(".container").find(".content-wrapper > p").text()
        },
        onClickForm: function () {
            var t = [];
            return t.push({
                title: "Заголовок ",
                data: title
            }), t.push({
                title: "Кнопка",
                data: buttonText
            }), t
        },
        answer: function () {
            $('#answer').bPopup();
        }
    });
    $(".brif-popUp5 form").aSendForm({
        popup: [".brif-popUp5", ".service-block2 .wrapper-parts .part .container .brif-popUp5-button"],
        goal: goal,
        closeData: 113e3,
        associations: form_name,

        validateRuls: form_ruls,
        onClickPopup: function () {
            $(".brif-popUp5").find("button > span").addClass("displayNone"), $(".brif-popUp5").find("button > span").eq($(this).parents(".part").index()).removeClass("displayNone"), buttonText = $(this).text(), title = $(this).parents(".container").find(".content-wrapper > p").text()
        },
        onClickForm: function () {
            var t = [];
            return t.push({
                title: "Заголовок ",
                data: title
            }), t.push({
                title: "Кнопка",
                data: buttonText
            }), t
        },
        answer: function () {
            $('#answer').bPopup();
        }
    });
    $(".brif-popUp18 form").aSendForm({
        popup: [".brif-popUp18", ".service-block2 .wrapper-parts .part .container .brif-download-popUp"],
        goal: goal,
        closeData: 113e3,
        associations: form_name,

        validateRuls: form_ruls,
        onClickPopup: function () {
            buttonText = $(this).text(), title = $(this).parents(".container").find(".content-wrapper > p").text()


        },
        onClickForm: function () {
            let type = $('.brif-popUp18 .chek_brif:checked').data('val');
            $('.download_brifs__' + type)[0].click();


            let t = [];
            return t.push({
                title: "Заголовок ",
                data: title
            }), t.push({
                title: "Кнопка",
                data: buttonText
            }), t
        },
        answer: function () {
            $('#answer').bPopup();
        }
    })
}

$(function () {
    serviceForms()
});

//*popUp скачать бриф проверка на checked
function check_input() {
    $('input[type=radio]').change(function () {
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
};
//*popUp скачать бриф проверка на checked


