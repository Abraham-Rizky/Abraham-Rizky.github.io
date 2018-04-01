var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var currentWeather = $('#currentweather').text(myObj.current_observation.weather);
        var currentTemp = $('#currenttemp').append("<br>" + "<br>" + myObj.current_observation.temp_f + " &deg; F");
        //var windSpeed = $('#windSpeed').append(myObj.current_observation.wind_mph);
        var windDirection = $('#windDirection').append(myObj.current_observation.wind_dir);
        var image = $('#weatherImage').attr('src', myObj.current_observation.icon_url);
        //var precipitation = $('#precipitation').append(myObj.current_observation.precip_today_in);
        //var windChill = $('#windChill').text(myObj.current_observation.windchill_f);




    }
};
xmlhttp.open("GET", "https://api.wunderground.com/api/e838f2d5852451d0/conditions/q/OR/Springfield.json", true);
xmlhttp.send();



