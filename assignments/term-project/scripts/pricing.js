var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var gold = $('#gold').text(myObj.towns[0].gold);
        var silver = $('#silver').text(myObj.towns[0].silver);
        var bronze = $('#bronze').text(myObj.towns[0].bronze);
        var drivetrain = $('#drivetrain').text(myObj.towns[1].drivetrain);
        var flatTire = $('#flatTire').text(myObj.towns[1].flatTire);
        var wheelTrue = $('#wheelTrue').text(myObj.towns[1].wheelTrue);
        var brake = $('#brake').text(myObj.towns[1].brake);
        var deraileur = $('#deraileur').text(myObj.towns[1].deraileur);
        var chain = $('#chain').text(myObj.towns[1].chain);

    }
};
xmlhttp.open("GET", "http://abraham-rizky.github.io/assignments/term-project/data/pricing.json", true);
xmlhttp.send();
