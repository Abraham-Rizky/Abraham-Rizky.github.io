function toggleHam() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
var acc = $(".accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
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

var urlString, urlArray, pageHREF, menu, i, currentURL;
urlString = document.location.href;
urlArray = urlString.split('/');
pageHREF = urlArray[urlArray.length - 1];

if (pageHREF !== "") {
    menu = document.querySelectorAll('ul#mainmenu li a');
    for (i = 0; i < menu.length; i++) {
        currentURL = (menu[i].getAttribute('href'));
        menu[i].className = '';
        if (currentURL === pageHREF) {
            menu[i].className = 'active';
        }
    }
}
