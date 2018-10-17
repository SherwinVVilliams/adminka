form_handle = '/handle';
form_name = {
    name: "Имя",
    surname: "Фамилия",
    phone: "Номер телефона",
    email: "Е-mail",
    question: "Вопрос",
    title: "Заголовок",
    button: "Кнопка",
    'call-me': 'Когда Вам позвонить',
    wyn: "Чего хочет клиент",
    cbx_brif_site: 'Бриф на сайт',
    cbx_brif_landing: 'Бриф на лендинг',
    cbx_brif_store: 'Бриф на магазин',
    cbx_brif_logo: 'Бриф на лого',
    cbx_brif_rk: 'Бриф на РК',
    cbx_adwords: 'Бриф на Адвордс',
    cbx_coorp_style: 'Корпстиль',
    cbx_mark_kit: 'Маркетинг кит',
    cbx_direct: 'Настройка директ',
    cbx_smm: 'Настройка СММ',
    cbx_seo: 'Настройка СЕО',
    cbx_catalog: 'Сайт каталог',
    cbx_store: 'Магазин',
    cbx_landing: 'Лендинг',
    cbx_project: 'Объемный проект',
    cbx_banner: 'Банеры',
    cbx_logo: 'Лого',
    cbx_mail: 'Рассылка',
    landing_1: 'Провести полный SWOT-анализ Вашего бизнеса',
    landing_2: 'Изучить рынок и проанализировать Ваших конкурентов',
    landing_3: 'Упаковать и оформить Ваше предложение (сформировать УТП)',
    landing_4: 'Создать продающие тексты, триггеры и акции',
    landing_5: 'Настроить мультилендинг по нескольким категориям товаров/услуг',
    landing_6: 'Настроить геотаргетинг для посетителей сайта',
    landing_7: 'Установить Callbackhunter, Jivosite или аналогичные сервисы',
    landing_8: 'Нарисовать уникальный и привлекательны дизайн',
    landing_9: 'Установить и настроить CMS (для управления заявками и продажами)',
    landing_10: 'Установить админ.панель для управления контентом на сайте',
    landing_11: 'Сделать базовую SEO-оптимизацию и индексацию сайта',
    landing_12: 'Установить и настроить аналитику и метрику',
    landing_13: 'Создать живую анимацию элементов и Parallax ',
    landing_14: 'Сделать сайт адаптивным для любых устройств (Bootstrap)',
    landing_15: 'Подключить смс-информирование или сервис email-рассылок',
    landing_16: 'Сделать А/В тестирование страниц или экранов',
};
form_ruls = {
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
        },
        check: {
            required: "Отметьте необходимое"
        },
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
            required: "Это поле обязательное для заполнения",
            regex: "Номер нужно указывать в международном формате<br><span>+1 234 567 89 01</span>"
        }
    }
};
goal = function () {
    // ga('send', 'event', 'knopka', 'zakazat');
    yaCounter25425284.reachGoal('sform');
};
function footerBottom() {
    if ("undefined" !== typeof page) switch (page) {
        case "index":
            var e = function () {
                var e = 67,
                    o = parseInt($(".footer").outerHeight()),
                    t = e + o;
                $(".index-block9").css("padding-bottom", t)
            };
            $(window).resize(e), e();
            break;
        case "portfolio":
            var e = function () {
                var e = 140,
                    o = parseInt($(".footer").outerHeight()),
                    t = e + o;
                $(".portfolio-block1").css("padding-bottom", t)
            };
            $(window).resize(e), e()
    } else e = function () {
        $("body").css("padding-bottom", parseInt($(".footer").outerHeight()))
    }, $(window).resize(e), e()
}

function selectmenuLang() {
    $(".selectMenu.lang-select").selectmenu()
}

function forMobileMenu() {
    var hasIE = window.eval && eval("/*@cc_on 1;@*/") && (/msie (\d+)/i.exec(navigator.userAgent) || [, !0])[1];
    $(".header .container .mobileMenuButton").click(function () {
        $(this).toggleClass("active"), $(".header .container .mobileMenu").slideToggle(400), $(this).hasClass("active") ? $(".header").addClass("fixed") : $(".header").removeClass("fixed")
    });
    fn = function () {
        var e = $(window).width(),
            o = $(".header .container .mobileMenuButton");
        hasIE > 9 ? e > 767 ? ($(".header .container .mobileMenu").slideDown(400), o.removeClass("active")) : ($(".header .container .mobileMenu").slideUp(50), o.removeClass("active")) : getScrollBarWidth() + e > 767 ? ($(".header .container .mobileMenu").slideDown(400), o.removeClass("active")) : (o.removeClass("active"), $(".header .container .mobileMenu").slideUp(50))
    };
    $(window).resize(fn), fn()
}

function headerOnScroll() {
    $(window).on("scroll", function () {
        var e = $(window).width(),
            o = $(window).scrollTop();
        getScrollBarWidth() + e < 768 || (o >= 70 ? $(".header").addClass("fixed") : $(".header").removeClass("fixed"))
    })
}

function mainMenu() {
    $(".header .container .main-menu li").click(function () {
        $(this).parent().find("li.active").removeClass("active"), $(this).addClass("active")
    })
}

function getScrollBarWidth() {
    var e = document.createElement("p");
    e.style.width = "100%", e.style.height = "200px";
    var o = document.createElement("div");
    o.style.position = "absolute", o.style.top = "0px", o.style.left = "0px", o.style.visibility = "hidden", o.style.width = "200px", o.style.height = "150px", o.style.overflow = "hidden", o.appendChild(e), document.body.appendChild(o);
    var t = e.offsetWidth;
    o.style.overflow = "scroll";
    var i = e.offsetWidth;
    return t === i && (i = o.clientWidth), document.body.removeChild(o), t - i
}


function perloader() {
    $(window).load(function () {
        $('.preloader_conteiner').fadeOut(300);
    });
    $(function () {
        $('a[href^=\\/]').not('a[href^=\\/assets]').click(function () {
            $('.preloader_conteiner').fadeIn(200);
        })
    })
}

perloader();

function forms_all() {
    $(".brif-popUp form").aSendForm({
        popup: ['.brif-popUp', '.index-block8 .container .brif-download button,' +
        '.service-devOfOnlineStore-block1 .container .brif-download,' +
        '.service-katalog-block1 .container .brif-download,' +
        '.service-hard-block1 .container .brif-download,' +
        '.service-select-block .container .brif-popUp-btn'],
        goal: goal,
        onClickForm: function () {
            var type = $('.brif-popUp .chek_brif:checked').data('val');
            $('.download_brifs__'+type)[0].click();
        },
        closeData: 113e3,
        associations: form_name,

        validateRuls: form_ruls,
    });
}

$(function () {
    selectmenuLang();
    forMobileMenu();
    headerOnScroll();
    mainMenu();
    footerBottom();
    forms_all();
});