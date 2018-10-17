$(function () {
    serviceDevForms();
});


function serviceDevForms() {
    var e = {
            name: "Имя",
            surname: "Фамилия",
            phone: "Номер телефона",
            email: "Е-mail",
            question: "Вопрос",
            title: "Заголовок",
            button: "Кнопка",
            "": "",
            wyn: "Чего хочет клиент",
            "": ""
        },
        t = {
            rules: {
                name: {
                    required: !0
                },
                surname: {
                    required: !0
                },
                email: {
                    required: !0,
                    email: !0
                },
                question: {
                    required: !0
                },
                phone: {
                    required: !0,
                    regex: /^([\(\)\+\- ]{0,2}[\d]){10,13}$/g
                }
            },
            messages: {
                name: {
                    required: "Это поле обязательное для заполнения",
                    email: "Введите данные в указаном формате"
                },
                email: {
                    email: "Введите данные в указаном формате"
                },
                phone: {
                    required: "Это поле обязательное для заполнения"
                }
            }
        };
    $(".brif-popUp7 form").aSendForm({
        popup: [".brif-popUp7", ".service-dev-block1 .container .btn-wrapper .just-popUp-button"],
        goal: goal,

        closeData: 113e3,
        associations: form_name,

        validateRuls: t,
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
    }),
        $(".brif-popUp3 form").aSendForm({
            popup: [".brif-popUp3", ".service-dev-block1 .container .btn-wrapper .just-consult"],
            goal: goal,

            closeData: 113e3,
            associations: form_name,

            validateRuls: t,
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
        }),
        $(".brif-popUp17 form").aSendForm({
            popup: [".brif-popUp17", ".service-dev-block1 .container .btn-wrapper .just-popUp-project"],
            goal: goal,

            closeData: 113e3,
            associations: form_name,

            validateRuls: t,
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
$(function() {
    serviceDevForms()
});