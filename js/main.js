//для карусели с отзывами
$(document).ready(function(){
    $(".carousel").owlCarousel({
        navText: [$('.am-next'),$('.am-prev')],
        loop:true,
        center:true,
        margin:30,
        items:2,
        nav: true,
        dots: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        height: 300,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
});
//END для карусели с отзывами

//для фотоальбомов
$('#wedding1').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'img/portfolio/wedding1/1.jpg',
            'thumb': 'img/portfolio/wedding1/min/1.jpg',
            'subHtml': '<h4>Фото Бабкин Алексей</h4><p>Помолвка Дианы и Вигена</p>'
        },
            {
                "src": 'img/portfolio/wedding1/2.jpg',
                'thumb': 'img/portfolio/wedding1/min/2.jpg',
                'subHtml': '<h4>Фото Бабкин Алексей</h4><p>Помолвка Дианы и Вигена</p>'
            },
            {
                "src": 'img/portfolio/wedding1/3.jpg',
                'thumb': 'img/portfolio/wedding1/min/3.jpg',
                'subHtml': "<h4>Фото Бабкин Алексей</h4><p>Помолвка Дианы и Вигена</p>"
            },
            {
                "src": 'img/portfolio/wedding1/4.jpg',
                'thumb': 'img/portfolio/wedding1/min/4.jpg',
                'subHtml': "<h4>Фото Бабкин Алексей</h4><p>Помолвка Дианы и Вигена</p>"
            },
            {
                "src": 'img/portfolio/wedding1/5.jpg',
                'thumb': 'img/portfolio/wedding1/min/5.jpg',
                'subHtml': "<h4>Фото Бабкин Алексей</h4><p>Помолвка Дианы и Вигена</p>"
            },
            {
                "src": 'img/portfolio/wedding1/6.jpg',
                'thumb': 'img/portfolio/wedding1/min/6.jpg',
                'subHtml': "<h4>Фото Бабкин Алексей</h4><p>Помолвка Дианы и Вигена</p>"
            }]
    })

});
$('#wedding2').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'img/portfolio/wedding2/1.jpg',
            'thumb': 'img/portfolio/wedding2/min/1.jpg',
            'subHtml': '<h4>Фото Гришина Кристина</h4><p>Свадьба Ирины и Федора</p>'
        },
            {
                "src": 'img/portfolio/wedding2/2.jpg',
                'thumb': 'img/portfolio/wedding2/min/2.jpg',
                'subHtml': '<h4>Фото Гришина Кристина</h4><p>Свадьба Ирины и Федора</p>'
            },
            {
                "src": 'img/portfolio/wedding2/3.jpg',
                'thumb': 'img/portfolio/wedding2/min/3.jpg',
                'subHtml': "<h4>Фото Гришина Кристина</h4><p>Свадьба Ирины и Федора</p>"
            },
            {
                "src": 'img/portfolio/wedding2/4.jpg',
                'thumb': 'img/portfolio/wedding2/min/4.jpg',
                'subHtml': "<h4>Фото Гришина Кристина</h4><p>Свадьба Ирины и Федора</p>"
            },
            {
                "src": 'img/portfolio/wedding2/5.jpg',
                'thumb': 'img/portfolio/wedding2/min/5.jpg',
                'subHtml': "<h4>Фото Гришина Кристина</h4><p>Свадьба Ирины и Федора</p>"
            },
            {
                "src": 'img/portfolio/wedding2/6.jpg',
                'thumb': 'img/portfolio/wedding2/min/6.jpg',
                'subHtml': "<h4>Фото Гришина Кристина</h4><p>Свадьба Ирины и Федора</p>"
            },
            {
                "src": 'img/portfolio/wedding2/7.jpg',
                'thumb': 'img/portfolio/wedding2/min/7.jpg',
                'subHtml': "<h4>Фото Гришина Кристина</h4><p>Свадьба Ирины и Федора</p>"
            }]
    })

});
$('#wedding3').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'img/portfolio/wedding3/1.jpg',
            'thumb': 'img/portfolio/wedding3/min/1.jpg',
            'subHtml': '<h4>Фото Калинкина Мария</h4><p>Свадьба Веры и Сергея</p>'
        },
            {
                "src": 'img/portfolio/wedding3/2.jpg',
                'thumb': 'img/portfolio/wedding3/min/2.jpg',
                'subHtml': '<h4>Фото Калинкина Мария</h4><p>Свадьба Веры и Сергея</p>'
            },
            {
                "src": 'img/portfolio/wedding3/3.jpg',
                'thumb': 'img/portfolio/wedding3/min/3.jpg',
                'subHtml': "<h4>Фото Калинкина Мария</h4><p>Свадьба Веры и Сергея</p>"
            },
            {
                "src": 'img/portfolio/wedding3/4.jpg',
                'thumb': 'img/portfolio/wedding3/min/4.jpg',
                'subHtml': "<h4>Фото Калинкина Мария</h4><p>Свадьба Веры и Сергея</p>"
            },
            {
                "src": 'img/portfolio/wedding3/5.jpg',
                'thumb': 'img/portfolio/wedding3/min/5.jpg',
                'subHtml': "<h4>Фото Калинкина Мария</h4><p>Свадьба Веры и Сергея</p>"
            },
            {
                "src": 'img/portfolio/wedding3/6.jpg',
                'thumb': 'img/portfolio/wedding3/min/6.jpg',
                'subHtml': "<h4>Фото Калинкина Мария</h4><p>Свадьба Веры и Сергея</p>"
            }]
    })

});
$('#wedding4').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [{
            "src": 'img/portfolio/wedding4/1.jpg',
            'thumb': 'img/portfolio/wedding4/min/1.jpg',
            'subHtml': '<h4>Фото Калинкина Мария</h4><p>Свадьба Светланы и Михаила</p>'
        },
            {
                "src": 'img/portfolio/wedding4/2.jpg',
                'thumb': 'img/portfolio/wedding4/min/2.jpg',
                'subHtml': '<h4>Фото Калинкина Мария</h4><p>Свадьба Светланы и Михаила</p>'
            },
            {
                "src": 'img/portfolio/wedding4/3.jpg',
                'thumb': 'img/portfolio/wedding4/min/3.jpg',
                'subHtml': "<h4>Фото Калинкина Мария</h4><p>Свадьба Светланы и Михаила</p>"
            },
            {
                "src": 'img/portfolio/wedding4/4.jpg',
                'thumb': 'img/portfolio/wedding4/min/4.jpg',
                'subHtml': "<h4>Фото Калинкина Мария</h4><p>Свадьба Светланы и Михаила</p>"
            },
            {
                "src": 'img/portfolio/wedding4/5.jpg',
                'thumb': 'img/portfolio/wedding4/min/5.jpg',
                'subHtml': "<h4>Фото Калинкина Мария</h4><p>Свадьба Светланы и Михаила</p>"
            },
            {
                "src": 'img/portfolio/wedding4/6.jpg',
                'thumb': 'img/portfolio/wedding4/min/6.jpg',
                'subHtml': "<h4>Фото Калинкина Мария</h4><p>Свадьба Светланы и Михаила</p>"
            }]
    })

});
$('#reviewOne').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
            {
                "src": 'img/review/rev_inst.jpg',
                'thumb': 'img/review/rev_inst.jpg',
                'subHtml': "<h4>Отзывы</h4><p></p>"
            }]
    })

});
$('#reviewTwo').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
            {
                "src": 'img/review/rev-vk.jpg',
                'thumb': 'img/review/rev-vk.jpg',
                'subHtml': "<h4>Отзывы</h4><p></p>"
            }]
    })

});
$('#reviewThree').on('click', function() {

    $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
            {
                "src": 'img/review/rev.jpg',
                'thumb': 'img/review/rev.jpg',
                'subHtml': "<h4>Отзывы</h4><p></p>"
            }]
    })

});
//END для фотоальбомов

//для прокрутки
var linkMail = 'header .right-container .callMe a';
var linkNav = 'nav a';
var bodyHtml = 'body, html';


$(linkNav).click(function(){
    $(bodyHtml).animate({
        scrollTop:$('#' + $(this).data('value')).offset().top
    },1500);
});

$(linkMail).click(function(){
    $(bodyHtml).animate({
        scrollTop:$('#' + $(this).data('value')).offset().top
    },1500);
});
//END для прокрутки

//для анимации подчеркивания
$(function() {
    var $line           = $(".line"),
        $menu_link      = $(".list__item--link"),
        $active         = $(".active"),
        $element,
        $active_left    = $active.position().left,
        $active_width   = $active.parent().width(),
        $new_left,
        $new_width;

    $line.width($active_width).css("left", $active_left);

    //подчеркнуть при наведении
    $($menu_link).hover(function() {
        $element = $(this);
        $new_left =  $element.position().left;
        $new_width =  $element.parent().width();
        $line.stop().animate({left: $new_left,width: $new_width});
    }, function() {
        $line.stop().animate({left:$active_left,width:$active_width});
    });

    //подчеркнуть при клике
    $($menu_link).click(function(){
        //e.preventDefault();
        $(".list").find(".active").removeClass("active");
        $(this).addClass("active");
        $active_left    =  $(this).position().left,
            $active_width   =  $(this).parent().width();
    });
});
//END для анимации подчеркивания

//прокрутка страницы - active
var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $("a[href*='#']").click(function(e){
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 50, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
});
// $(document).ready(function(){
//     $(".top-menu").changeActiveNav();
// });
//END прокрутка страницы - active

//кнопка меню на мобилке
$('button').on('click', function(){
    $('body').toggleClass('open');
});
$('li').click(function(){
    var target = $(this).find('a').attr('data-value');

    $(bodyHtml).animate({
        scrollTop:$('#' + target).offset().top
    },1500);
    $('body').toggleClass('open');
});
//END кнопка меню на мобилке

//-----------ajax form-----------
function AjaxFormRequest(result_id,formMain,url) {
    jQuery.ajax({
        url:     url,
        type:     "POST",
        dataType: "html",
        data: jQuery("#"+formMain).serialize(),
        success: function(response) {
            document.getElementById(result_id).innerHTML = response;
        },
        error: function(response) {
            document.getElementById(result_id).innerHTML = "<p>Cообщение не отправленно. Пожалуйста, попрбуйте еще раз</p>";
        }
    });

    $(':input','#formMain')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
};
//-----------END ajax form-----------

$('#callMe').click(function() { // Вызываем функцию по нажатию на кнопку
    var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
    $(popup_id).show().css('display','fixed'); // Открываем окно
    $('.overlay_popup').show(); // Открываем блок заднего фона
})
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})


