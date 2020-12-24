$(document).ready(function () {
    $(window).on('load', function () {
        $('.str').liMarquee();
    });
    $("ul.top li").hover(function () {
        $(this).children("ul.sub").slideDown(1);
    }, function () {
        $(this).children("ul.sub").slideUp(1);
    });
    $(".main-content_top_img").hover(function () {
        $('.main-search').show();
    }, function () {
        $('.main-search').hide();
    });
    $("#context_text").click(function () {
        $('.form').show();
    })
    $('.collapsBox').click(function () {
        $(".gallery_toggle, .plus_icon,.minus-icon, .arrowRight,.arrowDown").toggle();
    });
    var distance = $('#navigation-sections').offset().top;

    $(window).scroll(function () {

        if ($(window).scrollTop() >= distance) {
            $('#navigation-sections').addClass("affix");

        } else {
            $('#navigation-sections').removeClass("affix");
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
    $('.burger, .overlay').click(function(){
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('.nav').toggleClass('show');
        $('body').toggleClass('overflow');
    });
});