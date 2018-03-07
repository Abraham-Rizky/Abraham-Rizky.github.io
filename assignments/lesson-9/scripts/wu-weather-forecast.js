var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var highTemp = $('highTemp').append(myObj.forecast);




    }
};
xmlhttp.open("GET", "http://api.wunderground.com/api/e838f2d5852451d0/forecast/q/MN/Franklin.json", true);
xmlhttp.send();
