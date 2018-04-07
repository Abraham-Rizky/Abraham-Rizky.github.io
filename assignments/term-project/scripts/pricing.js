var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var gold = $('#gold').text(myObj.towns[0].gold );

    }
};
xmlhttp.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json", true);
xmlhttp.send();
