$(function () {
    /* Plogin */
    //스크롤러
    var s = skrollr.init({
        smoothScrolling: true,
        smoothScrollingDuration: 700,
    });

    /* Direct */
    //로딩
    var textWrapper = document.querySelector(".intro-title");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
    );

    anime
        .timeline({
            loop: false,
        })
        .add({
            targets: ".intro-title .letter",
            translateX: [140, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: function (el, i) {
                return 500 + 50 * i;
            },
        })
        .add({
            targets: ".intro-title .letter",
            translateX: [0, -140],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1200,
            delay: function (el, i) {
                return 700 + 50 * i;
            },
        });

    TweenMax.to(".loader", 2.2, {
        delay: 5,
        top: "-100%",
        ease: Expo.easeInOut,
    });

    // 스크롤 좌표
    window.addEventListener("scroll", () => {
        let scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            window.scrollY;

        document.querySelector(".scroll").innerText = Math.round(scrollTop);
    });

    //레이어팝업 확장
    $(":checkbox").on("click", function () {
        $(this).parent(".bg-in").toggleClass("active");
        $("body").toggleClass("modal-open");
    });


});
