// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var canvas = $('#pixelCanvas');
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();

    canvas.children().remove()

    for (x = 0; x < height; x++) {
        canvas.append('<tr></tr>');
    }

    var rows = $('tr');

    for (y = 0; y < width; y++) {
        rows.append('<td></td>');
    }

   var cell = canvas.find('td');

    cell.mousedown(function() {

        var color;
        color = $("#colorPicker").val();
        $(this).css('background-color', color);
    });

}

// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
    event.preventDefault();
    makeGrid();
});

function clearCanvas(){
    $('#pixelCanvas').toggle(makeGrid());
}
