
$(document).on('click','.js-videoPoster',function(e) {
    //отменяем стандартное действие button
    e.preventDefault();
    var poster = $(this);
    // ищем родителя ближайшего по классу
    var wrapper = poster.closest('.js-videoWrapper');
    videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
    var iframe = wrapper.find('.js-videoIframe');
    // Берем ссылку видео из data
    var src = iframe.data('src');
    // скрываем постер
    wrapper.addClass('videoWrapperActive');
    // подставляем в src параметр из data
    iframe.attr('src',src);
}

//адаптивное меню

$ (function () {
    $('.menuToggle').on('click', function () {
        $('.menu').slideToggle(300, function () {
            if ($(this).css('display')==='none') {
                $(this).removeAttr('style');
            }
        });
    });
});

//слайдер

document.addEventListener('DOMContentLoaded', function(){

    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,1000);
    console.log(slides);
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide++;
        if(currentSlide >= slides.length){
            currentSlide = 0;
        }
        slides[currentSlide].className = 'slide showing';
    }
});
