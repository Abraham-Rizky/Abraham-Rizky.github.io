var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var newParagraph = document.createElement('h3');
        var motto = $('#franklin-json').text("Motto : " + myObj.towns[0].motto );
        var motto = $('#franklin-json').append("\n", " Year founded : " + myObj.towns[0].yearFounded);
        var motto = $('#franklin-json').append( " Population : " + myObj.towns[0].currentPopulation);
        var motto = $('#franklin-json').append( " Annual rainfall : " + myObj.towns[0].averageRainfall + "  inches");
    }
};
xmlhttp.open("GET", "  https://byui-cit230.github.io/weather/data/towndata.json", true);
xmlhttp.send();
