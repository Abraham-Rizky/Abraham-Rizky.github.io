$(document).ready(function(){
    $('#mainmenu ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});
