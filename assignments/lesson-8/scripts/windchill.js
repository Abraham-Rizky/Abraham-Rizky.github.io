function calculateWindChill() {
    var highTemp = parseFloat($('body').find('#highTemp').val());
    var lowTemp = parseFloat($('main').find('#lowTemp').val());
    var windSpeed = parseFloat($('body').find('#windSpeed').val());
    var airAverage = (highTemp + lowTemp) / 2;
    var f = 35.74 + (0.6215 * airAverage) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * airAverage * Math.pow(windSpeed, 0.16));
    var fRound = Number.parseFloat(f).toFixed(2);

    document.getElementById("windChill").value = fRound;

}

function reset() {
    document.getElementById("windChill").value = "";

}

