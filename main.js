var timeStart = null,
    timeStop = null,
    duration = 0,
    started = null;

function start() {
    if (timeStart === null) {
        timeStart = new Date();
    }

    if (timeStop !== null) {
        duration += (new Date() - timeStop);
    }

    started = setInterval(clockRunning, 10);	
}

function stop() {
    timeStop = new Date();
    clearInterval(started);
}
 
function reset() {
    clearInterval(started);
    duration = 0;
    timeStart = null;
    timeStop = null;
    document.getElementById("display").innerHTML = "00:00:00.000";
}

function clockRunning(){
    var currentTime = new Date(),
        timeElapsed = new Date(currentTime - timeStart - duration),
        hour = timeElapsed.getUTCHours(),
       	min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds(),
        ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("display").innerHTML = 
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}
