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

window.onload = function () {

    (function () {
        var counter = 5;

        setInterval(function () {
            counter--;
            if (counter >= 0) {
                span = document.getElementById("5");
                span.innerHTML = counter;
            }
            // Display 'counter' wherever you want to display it.
            if (counter === 0) {
                //    alert('this is where it happens');
                clearInterval(counter);
                window.location="index.html"
            }

        }, 1000);

    })();

}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var gold = $('#gold').text(myObj.towns[0].gold);
        var silver = $('#silver').text(myObj.towns[0].silver);
        var silver = $('#bronze').text(myObj.towns[0].bronze);

    }
};
xmlhttp.open("GET", "http://abraham-rizky.github.io/assignments/term-project/data/pricing.json", true);
xmlhttp.send();
