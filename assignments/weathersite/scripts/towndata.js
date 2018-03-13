var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var franklin = $('#franklin-json').text("Motto : " + myObj.towns[0].motto);

        franklin = $('#franklin-json').append("<br>" +"<br>" +" Year founded : " + myObj.towns[0].yearFounded);
        franklin = $('#franklin-json').append("<br>" +"<br>" +" Population : " + myObj.towns[0].currentPopulation);
        franklin = $('#franklin-json').append("<br>" +"<br>" +" Annual rainfall is " + myObj.towns[0].averageRainfall + "  inches");
        franklin = $('#franklin-event-json').append(myObj.towns[0].events[0]);
        franklin = $('#franklin-event-json').append("<br>" + "<br>" + myObj.towns[0].events[1]);
        franklin = $('#franklin-event-json').append("<br>" + "<br>" + myObj.towns[0].events[2]);


        var greenville = $('#greenville-json').text("Motto : " + myObj.towns[1].motto);

        greenville = $('#greenville-json').append("<br>" +"<br>" + " Year founded : " + myObj.towns[1].yearFounded);
        greenville = $('#greenville-json').append("<br>" +"<br>" + " Population : " + myObj.towns[1].currentPopulation);
        greenville = $('#greenville-json').append("<br>" +"<br>" + " Annual rainfall : " + myObj.towns[1].averageRainfall + "  inches");
        greenville = $('#greenville-event-json').append(myObj.towns[1].events[0]);
        greenville = $('#greenville-event-json').append("<br>" + "<br>" + myObj.towns[1].events[1]);
        greenville = $('#greenville-event-json').append("<br>" + "<br>" + myObj.towns[1].events[2]);
        greenville = $('#greenville-event-json').append("<br>" + "<br>" + myObj.towns[1].events[3]);
        greenville = $('#greenville-event-json').append("<br>" + "<br>" + myObj.towns[1].events[4]);
        greenville = $('#greenville-event-json').append("<br>" + "<br>" + myObj.towns[1].events[5]);


        var springfield = $('#springfield-json').text("Motto : " + myObj.towns[3].motto);

        springfield = $('#springfield-json').append("<br>" +"<br>" + " Year founded : " + myObj.towns[3].yearFounded);
        springfield = $('#springfield-json').append("<br>" +"<br>" + " Population : " + myObj.towns[3].currentPopulation);
        springfield = $('#springfield-json').append("<br>" +"<br>" + " Annual rainfall : " + myObj.towns[3].averageRainfall + "  inches");
        sringfield = $('#springfield-event-json').append(myObj.towns[3].events[0]);
        springfield = $('#springfield-event-json').append("<br>" + "<br>" + myObj.towns[3].events[1]);
        springfield = $('#springfield-event-json').append("<br>" + "<br>" + myObj.towns[3].events[2]);
    }
};
xmlhttp.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json", true);
xmlhttp.send();
