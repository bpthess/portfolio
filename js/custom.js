$(function () {
    /* PlogIn */


    /* Direct */
    // Scroll Mode


    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

        document.querySelector(".scroll").innerText = Math.round(scrollTop);
    })


});
const _root = document.documentElement;
const _mouse = document.querySelector('.mouse');
const _mouse_mid = document.querySelector('.mouse-mid');
const _mouse_guide = document.querySelector('.mouse-guide');

const a = 0.4; // Div follow mouse - speed
let _s = 60; // Div size - hover

let x_ = 0;
let y_ = 0;
let _x = 0;
let _y = 0;
let _xm_ = 0;
let _ym_ = 0;
let _x_ = 0;
let _y_ = 0;

_root.addEventListener('mousemove', function (event) {
    _x = event.clientX;
    _y = event.clientY;
}, false);

_root.addEventListener('mousedown', function (event) {
    _mouse.style.width = _s + 'px';
    _mouse.style.height = _s + 'px';
}, false);

_root.addEventListener('mouseup', function (event) {
    _mouse.style.width = (_s / 1.3) + 'px';
    _mouse.style.height = (_s / 1.3) + 'px';
}, false);

function main() {
    requestAnimationFrame(main);
    x_ += (_x - x_) * a / 2;
    y_ += (_y - y_) * a / 2;
    _x_ += (_x - _x_) * a;
    _y_ += (_y - _y_) * a;
    _xm_ += (_x - _xm_) * a / 1.5;
    _ym_ += (_y - _ym_) * a / 1.5;
    //--
    _mouse.style.left = x_ + 'px';
    _mouse.style.top = y_ + 'px';
    _mouse_mid.style.left = _xm_ + 'px';
    _mouse_mid.style.top = _ym_ + 'px';
    _mouse_guide.style.left = _x_ + 'px';
    _mouse_guide.style.top = _y_ + 'px';
}

window.addEventListener('load', main, false);

let isstatus = false;

function _onrollOver(value) {
    switch (value) {
        case true:
            _mouse.style.width = _s + 'px';
            _mouse.style.height = _s + 'px';
            _mouse.style.border = 2 + 'px solid white';
            _mouse.style.opacity = 1;
            break;
        case false:
            _mouse.style.width = (_s / 1.7) + 'px';
            _mouse.style.height = (_s / 1.7) + 'px';
            _mouse.style.border = 20 + 'px solid #444758'
            _mouse.style.opacity = 0.1;
            break;
        default:
            break;
    }
}


//    /* TypeIt - Welcome */
//    $('.ct-desc').typeIt({
//        strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."], // 타이핑 텍스트 입력
//        speed: 50, // 알파벳 타이핑 속도
//        autoStart: false, // 자동 재생 사용
//        breakLines: true, // 줄 바꿈 사용안함
//    });




// Skill Animation
//    function drawCircle(container, id, progress, parent) {
//        var paper = Snap(container);
//        var prog = paper.path("M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50");
//        var lineL = prog.getTotalLength();
//        var oneUnit = lineL / 100;
//        var toOffset = lineL - oneUnit * progress;
//        var myID = 'circle-graph-' + id;
//        prog.attr({
//            'stroke-dashoffset': lineL,
//            'stroke-dasharray': lineL,
//            'id': myID
//        });
//
//        var animTime = 1300/*progress / 100*/
//
//        prog.animate({
//            'stroke-dashoffset': toOffset
//        }, animTime, mina.easein);
//
//        function countCircle(animtime, parent, progress) {
//            var i = 0;
//            var time = 1300;
//            var intervalTime = Math.abs(time / progress);
//            var timerID = setInterval(function () {
//                i++;
//                textContainer.text(i + "%");
//                if (i === progress) clearInterval(timerID);
//            }, intervalTime);
//        }
//
//        countCircle(animTime, parent, progress);
//    }
//
//    $(window).on('load', function () {
//        drawCircle('.chart-circle', 1, 77, '.circle');
//    });





//
//
// var gau = ['gauge1', 'gauge2', 'gauge3', 'gauge4', 'gauge5']
//
// var gau = Gauge(
//     document.getElementById("gauge1", "gauge2"), {
//         max: 100,
//         dialStartAngle: -90,
//         dialEndAngle: -90.001,
//         value: 100,
//         label: function (value) {
//             return Math.round(value * 100) / 100;
//         }
//     }
// );
//
//
// (function loop() {
//     var value1 = Math.random() * 100,
//         value2 = Math.random() * 100,
//         value3 = Math.random() * 100,
//         value4 = Math.random() * 100,
//         value5 = Math.random() * 100;
//
//     // setValueAnimated(value, durationInSecs);
//     gau.setValueAnimated(value1, 1);
//
//     window.setTimeout(loop, 6000);
// })();


//
//    var gauge1 = Gauge(
//        document.getElementById("gauge1"), {
//            max: 100,
//            dialStartAngle: -90,
//            dialEndAngle: -90.001,
//            value: 100,
//            label: function (value) {
//                return Math.round(value) + "/" + this.max;
//            }
//        }
//    )
//    gauge1();
//    var gauge2 = Gauge(
//        document.getElementById("gauge2"), {
//            max: 100,
//            dialStartAngle: -90,
//            dialEndAngle: -90.001,
//            value: 100,
//            label: function (value) {
//                return Math.round(value) + "/" + this.max;
//            }
//        }
//    )
//    gauge2();
//    var gauge3 = Gauge(
//        document.getElementById("gauge3"), {
//            max: 100,
//            dialStartAngle: -90,
//            dialEndAngle: -90.001,
//            value: 100,
//            label: function (value) {
//                return Math.round(value) + "/" + this.max;
//            }
//        }
//    )
//    gauge3();
//    var gauge4 = Gauge(
//        document.getElementById("gauge4"), {
//            max: 100,
//            dialStartAngle: -90,
//            dialEndAngle: -90.001,
//            value: 100,
//            label: function (value) {
//                return Math.round(value) + "/" + this.max;
//            }
//        }
//    )
//    gauge4();
