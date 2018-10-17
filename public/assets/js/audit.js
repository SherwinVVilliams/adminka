$(function () {
    forms();
});

function forms() {
    $(".brif-popUp14 form").aSendForm({
        popup: ['.brif-popUp14', '.displayTable .conduct .existing-site'],
        goal: goal,
        closeData: 113000,
        associations: form_name,
        answer: function () {
            $('#answer').bPopup();
        },
        validateRuls: form_ruls,
        onClickForm: function () {
        }
    });
    $(".brif-popUp15 form").aSendForm({
        popup: ['.brif-popUp15', '.displayTable .conduct .advertising-company'],
        goal: goal,
        closeData: 113000,
        associations: form_name,
        answer: function () {
            $('#answer').bPopup();
        },
        validateRuls: form_ruls,
        onClickForm: function () {
        }
    });
    $(".brif-popUp16 form").aSendForm({
        popup: ['.brif-popUp16', '.displayTable .conduct .commercial-proposal'],
        goal: goal,
        closeData: 113000,
        associations: form_name,
        answer: function () {
            $('#answer').bPopup();
        },
        validateRuls: form_ruls,
        onClickForm: function () {
        }
    });

}




