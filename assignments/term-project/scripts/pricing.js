var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        $('#gold').append(myObj.rizkydata[0].gold );

    }
};
xmlhttp.open("GET", "https://abraham-rizky.github.io/assignments/term-project/data/pricing.json", true);
xmlhttp.send();
