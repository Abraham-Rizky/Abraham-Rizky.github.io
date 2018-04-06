function toggleHam() {
    document.getElementsByClassName("navigation") [0].classList.toggle("responsive");
}

var acc = $(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var franklin = $('#franklin-json').text("Motto : " + myObj.towns[0].motto );

        franklin = $('#franklin-json').append("<br>" + " Year founded : " + myObj.towns[0].yearFounded);
    }
};
xmlhttp.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json", true);
xmlhttp.send();
