var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj2 = JSON.parse(this.responseText);

        var highTemp = $('#highTemp').text(myObj2.forecast.simpleforecast.forecastday[1].high.fahrenheit);
        var highTemp = $('#lowTemp').append(myObj2.forecast.simpleforecast.forecastday[1].low.fahrenheit);
        var weatherDescription = $('#weatherdescription').text(myObj2.forecast.txt_forecast.forecastday[0].fcttext);




    }
};
xmlhttp.open("GET", "http://api.wunderground.com/api/e838f2d5852451d0/forecast/q/MN/Franklin.json", true);
xmlhttp.send();
