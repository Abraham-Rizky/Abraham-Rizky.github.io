
    var highTemp = parseFloat($('#highTemp').text());
    var lowTemp = parseFloat($('#lowTemp').text());
    var windSpeed = parseFloat($('#windSpeed').text());
    var airAverage = (highTemp + lowTemp) / 2;
    var f = 35.74 + (0.6215 * airAverage) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * airAverage * Math.pow(windSpeed, 0.16));
    var fRound = Number.parseFloat(f).toFixed(2);
    var x =  $('#windChill').append(fRound);




