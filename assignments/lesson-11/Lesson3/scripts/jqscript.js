// All jQuery code goes here
//window.onload = function() {
//var element = document.getElementById('alcoveLogo');
//element.style.opacity = 0.2;

//var elements = document.getElementsByClassName('servicesBtn');
//for (var i = 0; i < elements.length; i++) {
//if (i % 2 == 0) {
//elements[i].style.color = 'rgb(0,106,255)';
//}
//}

//var elements2 = document.getElementsByTagName('h2');
//for (var i = 0; i < elements2.length; i++) {
//elements2[i].style.borderColor = 'rgb (255,0,0)';
//elements2[i].style.borderWidth = '2px';
//elements2[i].style.borderStyle = 'solid';
//elements2[i].style.backgroundColor = 'rgba(255,0,0,0.2)';
//}

//var elements3 = document.querySelector(".navigation > li:nth-child(3) > a");
//elements3.style.color = 'rgb(255,0,0)';

//var elements4 = document.querySelectorAll(".navigation > li:nth-child(even) > a");
//for (var i=0; i <elements4.length; i++){
//elements4[i].style.color='rgb(255,0,0)';





//$('#alcoveLogo').css('opacity', 0.4);
//$('.servicesBtn').css('color', '#FFF');
//$('button').css('border', '1px solid red');
//$('h2').css('border', '1px solid red');
//$('input[name="nameVal"]').css('border', '1px solid red');
//$('input[name!="phoneNum"]').css('border', '1px solid red');
//$('input[name$="Val"]').css('border', '1px solid red');
//$('#alcoveLogo').next().css('background-color', 'rgba(255,0,0,0.2)');
//$('.box1').nextAll().css('background-color', 'rgba(255,0,0,0.2)');
//$('.header').children().css('background-color', 'rgba(255,0,0,0.2)');
//$('.navigation > li:eq(2)').parent().parent().parent().css('opacity', '0.3');
$('.servicesBtn').closest('div').css('background-color', 'rgba(255,0,0,0.2)');

// All jQuery code goes here
//$('li:first-of-type').css('background-color', 'rgb(248,95,95)');
//$('li:only-of-type').css('background-color', 'rgb(248,95,95)');
//$('li:contains("Crush")').css('background-color', 'rgb(248,95,95)');
//$('li:empty').css('background-color', 'rgb(248,95,95)');
//$('li:has("h4")').css('background-color', 'rgb(248,95,95)');
$('li:nth-child(3)').css('background-color', 'rgb(248,95,95)');

// All jQuery code goes here
//$('li:first').css('background-color', 'rgb(248,95,95)');
//$('li:last').css('background-color', 'rgb(248,95,95)');
//$('li:even').css('background-color', 'rgb(248,95,95)');
//$('li:odd').css('background-color', 'rgb(248,95,95)');
$('li:eq(3)').css('background-color', 'rgb(248,95,95)');
