$(function () {
    /* PlogIn */


    /* Direct */
    // Scroll Mode
    var s = skrollr.init({
        smoothScrolling: true
    });

    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

        document.querySelector(".scroll").innerText = Math.round(scrollTop);
    })


    // Skill Animation
    function drawCircle(container, id, progress, parent) {
        var paper = Snap(container);
        var prog = paper.path("M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50");
        var lineL = prog.getTotalLength();
        var oneUnit = lineL / 100;
        var toOffset = lineL - oneUnit * progress;
        var myID = 'circle-graph-' + id;
        prog.attr({
            'stroke-dashoffset': lineL,
            'stroke-dasharray': lineL,
            'id': myID
        });

        var animTime = 1300/*progress / 100*/

        prog.animate({
            'stroke-dashoffset': toOffset
        }, animTime, mina.easein);

        function countCircle(animtime, parent, progress) {
            var i = 0;
            var time = 1300;
            var intervalTime = Math.abs(time / progress);
            var timerID = setInterval(function () {
                i++;
                textContainer.text(i + "%");
                if (i === progress) clearInterval(timerID);
            }, intervalTime);
        }

        countCircle(animTime, parent, progress);
    }

    $(window).on('load', function () {
        drawCircle('.chart-circle', 1, 77, '.circle');
    });





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



    var gauge1 = Gauge(
        document.getElementById("gauge1"),
        {
            max: 100,
            dialStartAngle: -90,
            dialEndAngle: -90.001,
            value: 100,
            label: function(value) {
                return Math.round(value) + "/" + this.max;
            }
        }
    )
    gauge1();
    var gauge2 = Gauge(
        document.getElementById("gauge2"),
        {
            max: 100,
            dialStartAngle: -90,
            dialEndAngle: -90.001,
            value: 100,
            label: function(value) {
                return Math.round(value) + "/" + this.max;
            }
        }
    )
    gauge2();
    var gauge3 = Gauge(
        document.getElementById("gauge3"),
        {
            max: 100,
            dialStartAngle: -90,
            dialEndAngle: -90.001,
            value: 100,
            label: function(value) {
                return Math.round(value) + "/" + this.max;
            }
        }
    )
    gauge3();
    var gauge4 = Gauge(
        document.getElementById("gauge4"),
        {
            max: 100,
            dialStartAngle: -90,
            dialEndAngle: -90.001,
            value: 100,
            label: function(value) {
                return Math.round(value) + "/" + this.max;
            }
        }
    )
    gauge4();

});