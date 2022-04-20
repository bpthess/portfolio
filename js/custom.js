$(function () {
//PlogIn

//Direct
    /* Scroll Mode */
        let lastScrollTop = 0;
        const totalWidth = $(".container").width();
        $("body").css("height", totalWidth);

        $(window).scroll(function(){
        let wScroll = $(window).scrollTop();
        let wWidth = $(window).width();
        let wHeight = $(window).height();
        let dHeight = $("body").height() - wHeight; //전체 세로 값 - 현재 화면의 세로 값
        let dWidth = totalWidth - wWidth;           //전체 가로 값 - 현재 화면의 가로 값
        $(".container").css("left", -wScroll);
    });
});