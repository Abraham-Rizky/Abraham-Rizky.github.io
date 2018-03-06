var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);


            var motto = document.getElementById("franklin-json").innerHTML = "Motto : " + myObj.towns[0].motto;
            var year = document.getElementById("franklin-json").innerHTML = "Year founded : " + myObj.towns[0].yearFounded;
            var population = document.getElementById("franklin-json").innerHTML = "Population : " + myObj.towns[0].currentPopulation;
            var rainfall = document.getElementById("franklin-json").innerHTML = "Annual rainfall : " + myObj.towns[0].averageRainfall + "  inches";

    }
};
xmlhttp.open("GET", "  https://byui-cit230.github.io/weather/data/towndata.json", true);
xmlhttp.send();
