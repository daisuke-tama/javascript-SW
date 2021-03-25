function TimeCount(){
    let ms = $("#m_second").text();
    let sec = $("#second").text();
    let min = $("#minute").text();
    let hour = $("#hour").text();
    ms++;
    $("#m_second").text(ms);
    if ($("#m_second").text() == 10) {
        sec++;
        $("#m_second").text(0);
        $("#second").text(sec);
    }
    if ($("#second").text() == 60) {
        min++;
        $("#second").text(0);
        $("#minute").text(min);
    }

    if ($("#minute").text() == 60) {
        hour++;
        $("#minute").text(0);
        $("#hour").text(hour);
    }
}

let swich = 0;
let time_count = null;
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');


$(document).ready(function(){
    
    stop.classList.add('can-not-push');
    reset.classList.add('can-not-push');
    
    function push_reset() {
        start.classList.remove('can-not-push');
        stop.classList.add('can-not-push');
        reset.classList.add('can-not-push');
    }

    function push_start() {
        start.classList.add('can-not-push');
        stop.classList.remove('can-not-push');
        reset.classList.add('can-not-push');
    }

    function push_stop() {
        start.classList.remove('can-not-push');
        stop.classList.add('can-not-push');
        reset.classList.remove('can-not-push');
    }
    
    
    $("#start").click(function(){
        if (start.classList.contains('can-not-push') === true) {
            return;
        }
        push_start();
        swich += 1
        if (swich==1){ 
            time_count = setInterval(TimeCount, 100);
        };
    });
    
    $("#stop").click(function(){
        if (stop.classList.contains('can-not-push') === true) {
            return;
        }
        push_stop();
        clearInterval(time_count);
        swich = 0;
    });
    
    $("#reset").click(function(){
        if (reset.classList.contains('can-not-push') === true) {
            return;
        }
        push_reset()
        clearInterval(time_count);
        swich=0;
        $("#hour").text(0);
        $("#minute").text(0);
        $("#second").text(0);
        $("#m_second").text(0);
    });
});

