var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var currentWeather = $('#currentweather').text(myObj.current_observation.weather);
        var currentWeather = $('#highTemp').text(myObj.current_observation.weather);


    }
};
xmlhttp.open("GET", "http://api.wunderground.com/api/e838f2d5852451d0/conditions/q/MN/Franklin.json", true);
xmlhttp.send();
