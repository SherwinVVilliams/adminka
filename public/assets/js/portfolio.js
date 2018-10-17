$(function () {
    tab_portfolio();
});

function tab_portfolio() {
    $('.portfolio-block1 .main-menu li').click(function (e) {
        e.preventDefault();

        $('.portfolio-block1 .main-menu li').removeClass('active');
        $(this).addClass('active');

        var id = $(this).find('a').data('id');
        var all = $(".img-site .part");
        if(id === 'all'){
            all.addClass('scale-out');
            setTimeout(function () {
                all.show();
                setTimeout(function () {
                    all.removeClass('scale-out');
                }, 10)
            }, 370);
        }else{
            all.addClass('scale-out');
            setTimeout(function () {
                all.hide();
                $(".img-site .part[data-category="+id+"]").show();
                setTimeout(function () {
                    $(".img-site .part[data-category="+id+"]").removeClass('scale-out');
                }, 10)
            }, 370);
        }
    });

}