function computeWindChill() {
    var highTemp = get("highTemp").value;
    var lowTemp = get("lowTemp").value;
    var windSpeed = get("windSpeed").value;
    var airAverage = (highTemp + lowTemp) / 2;
    var f = 35.74 + (0.6215 * airAverage) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * airAverage * Math.pow(windSpeed, 0.16));
    document.getElementById("outputTextBox").value = f;
}
