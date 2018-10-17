$(function () {
    serviceHardForms();
    check_input();
});

function serviceHardForms() {
    $(".brif-popUp6 form").aSendForm({
        popup: [".brif-popUp6", ".service-hard-block1 .container .brif-popUp6-button"],
        goal: goal,

        closeData: 113e3,
        associations: form_name,

        validateRuls: form_ruls,
        onClickPopup: function () {
            $(".brif-popUp6").addClass("hardProject"), buttonText = $(this).text(), title = $(".service .container h2").text()
        },
        onClickForm: function () {
            var e = [];
            return e.push({
                title: "Страница ",
                data: title
            }), e.push({
                title: "Кнопка",
                data: buttonText
            }), e
        },
        answer: function () {
            $('#answer').bPopup();
        },
    })
}


//*popUp скачать бриф проверка на checked
function check_input() {
    $('input[type=radio]').change(function () {
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
};
//*popUp скачать бриф проверка на checked