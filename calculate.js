function calculate() {
    var speed = document.getElementById("speed").value;
    var time = document.getElementById("time").value;
    var resultdiv = document.getElementById("result");

    speed_squared = speed ** 2;
    light_squared = Math.pow(299792458, 2);
    root =  Math.sqrt(1 - speed_squared / light_squared);

    result = time / root;

    // if (result > 60) {
    //     var min = parseInt(result / 60);
    //     var sec = result % 60;
    //     var result_time = min + '분' + ' ' + sec + '초';
    //     if (min > 60) {
    //         var hour = parseInt(min / 60);
    //         var min = parseInt(min % 60);
    //         var result_time = hour + '시간'+ ' ' + min + '분' + ' ' + sec + '초';
    //     }
    // }
    resultdiv.innerHTML = result + '초';
}