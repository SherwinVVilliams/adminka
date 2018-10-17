function serviceDevForms() {
    $(".brif-popUp7 form").aSendForm({
        popup: [".brif-popUp7", ".section-popUp .container button"],
        goal: goal,

        closeData: 113e3,
        associations: form_name,
        validateRuls: form_ruls,
        onClickPopup: function() {
            buttonText = $(this).text(), title = $(".service .container h2").text()
        },
        onClickForm: function() {
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

function parts() {
    particlesJS.load('particles-js__portfolio', '/assets/js/particlesjs-portfolio.json', function() {
        console.log('callback - particles.js config loaded');
    });
}

$(function() {
    serviceDevForms();
    parts();
});