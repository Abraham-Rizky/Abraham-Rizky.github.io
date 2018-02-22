
/*function myFunction() {
    var temp = parseFloat(document.getElementById("highTemp").value);
    var speed = parseFloat(document.getElementById("windSpeed").value);
    var result = windChillFunction(temp,speed);
    document.getElementById("windChill").innerHTML = result;
}

function windChillFunction(tempF,speed) {
    var f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * tempF *  Math.pow(speed,0.16)) ;
    return f;
}
*/
function calculateWindChill() {
    var highTemp = 45;
    var lowTemp = 40;
    var windSpeed = 25;
    var airAverage = (highTemp + lowTemp) / 2;
    var f = 35.74 + (0.6215 * airAverage) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * airAverage * Math.pow(windSpeed, 0.16));

    document.getElementById("windChill").value = f;

}

function reset() {
    document.getElementById("windChill").value = "";

}

