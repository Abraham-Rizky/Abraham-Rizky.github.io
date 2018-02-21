function calculateWindChill() {
    var highTemp = $('#highTemp').val();
    var lowTemp = $('#lowTemp').val();
    var windSpeed = $('#windSpeed').val();
    var airAverage = (highTemp + lowTemp) / 2;
    var f = 35.74 + (0.6215 * airAverage) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * airAverage * Math.pow(windSpeed, 0.16));

    document.getElementById("windChill").value = f;

}

function reset() {
    document.getElementById("windChill").value = "";

}
