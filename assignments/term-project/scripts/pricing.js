/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var myObj = JSON.parse(this.responseText), gold = $('#gold').text(myObj.rizkydata[0].gold);


    }
};
xmlhttp.open("GET", "https://abraham-rizky.github.io/assignments/term-project/data/pricing.json", true);
xmlhttp.send();
*/
$.get("https://abraham-rizky.github.io/assignments/term-project/data/pricing.json", function (data) {
    $("#gold")
        .append("Name: " + data.rizkydata[0].gold);
});
