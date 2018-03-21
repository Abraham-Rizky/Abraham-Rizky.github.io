$(function () {
    var inputFields = $('input[type="text"]');
    // jQuery Code goes here
    //console.log($('input[type="text"]').css('background-color'));
    var toggleStyle = function () {
        if (inputFields.css('background-color') === 'rgb(255, 0, 0)') {
            //Set background color to white
            $('input[type="text"]').css('background-color', 'rgb(255, 255, 255)');
        } else {
            //Set background color to red
            inputFields.css('background-color', 'rgb(255, 0, 0)');

        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);

    $('.coreValues').append("<li><strong>This is brand new !!</strong></li>");

    $("<li><strong>This is also great !!</strong></li>").appendTo(".coreValues");

    $('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>");
    $("<li><strong>This is also great !!</strong></li>").prependTo(".coreValues");

    var nameVal = $('input[name="nameVal"]');

    function FillEmpty() {
        if (nameVal.val() == '') {
            nameVal.val('John Doe');
        }
    }
    $('#ReqAQuoteBtn').click(FillEmpty);


    // jQuery Code goes here
    var box1 = $('.box1');
    var box2 = $('.box2');

    function LeftToRight() {
        if (box2.html() == '') {
            //Get content from box1 and put it into box2
            //Emtpy out box1
            box2.html(box1.html());
            box1.html('');
        }
    }

    $('#LeftToRight').click(LeftToRight);

    function RightToLeft() {
        if (box1.html() == '') {
            //Get content from box2 and put it into box1
            //Emtpy out box2
            box1.html(box2.html());
            box2.html('');
        }
    }

    $('#RightToLeft').click(RightToLeft);



    // All jQuery code goes here
    $('.navigation >li').hover(function () {
        //This code executes when the mouse pointer is over the list item
        $(this).addClass('openSesame');
    }, function () {
        //This code executes when the mouse pointer leaves the list item
        $(this).removeClass('openSesame');

    });

    // jQuery Code goes here
    $('.toggleBtn').click(function () {
        $(this).toggleClass("toggleOn");
    });

    // All jQuery code goes here
    /*$('.dropdownMenu >li').hover(function(){
                //Mouseover
                $(this).children("ul").slideDown(200);
            }, function(){
                //Mouseout
                $(this).children("ul").slideUp(200);
            });
            */
    $('.dropdownMenu > li').hover(function () {
        $(this).children("ul").slideToggle(200);
    });

    // Array containing Objects with Fruit names & quantities

    var fruitBasket = [{
            title: 'Apples',
            quantity: 20
    },
        {
            title: 'Oranges',
            quantity: 25
                       },
        {
            title: 'Kiwis',
            quantity: 50
                       },
        {
            title: 'Strawberries',
            quantity: 45
                       },
        {
            title: 'Bananas',
            quantity: 10
                       },
        {
            title: 'Mangoes',
            quantity: 5
                       },
        {
            title: 'Tomatoes',
            quantity: 30
                       }
                      ];

    // Your jQuery code goes here
    $.each(fruitBasket, function (index, element) {
        $('.fruits').append('<li>We have ' + element.quantity + " " + element.title + '</li>')
    })
    $('.fruits > li').each(function (index, element) {
        $(element).css('background-color', 'rgb(100,200,0)');
    });

})
