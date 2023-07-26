$('.main span').click(function(){
    $('.mySidenav').animate({  width: '250px'},2000);
    document.querySelector('.main span').classList.add('d-none')
    $('.main span').animate({"margin-left":"250px"},2000);

})
$('.close-btn').click(function(){
    $('.mySidenav').animate({  width: '0px'},2000);
    document.querySelector('.main span').classList.remove('d-none')
    $('.main span').animate({"margin-left":"0px"},2000)
})


// $('.singers h3').click(function(){
//     $(".singers .one").css("display","block");
//     $(this).next().slideToggle(200);

// })

$(document).ready(function () {
    $(".singers div:first").css("display", "block");
    $(".singers h3").click(function () {
        $(this).next().slideToggle(1000);
        $(".singers div").not($(this).next()).slideUp(500);
    });
});

function countDown()
{
    let date = new Date();
    let eventDate= new Date(2021,12,17)
    let currentTime= date.getTime();
    let eventTime=eventDate.getTime();
    let remTime= eventTime - currentTime;
    
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    document.getElementById('days').innerHTML="<h3 >" + d + "D"+"</h3>";
    document.getElementById('hours').innerHTML="<h3>"+ h + "h"+"</h3>";
    document.getElementById('minutes').innerHTML="<h3>"+m+ "m"+"</h3>";
    document.getElementById('seconds').innerHTML="<h3>"+s+ "s"+"</h3>";
    setTimeout(countDown,1000)
}
countDown();

let max =100;
$('textarea').keyup(function(){
    let length=$(this).val().length;
    let character = max - length;
    if(character <= 0 )
    {
        $('#char').text("your available character finished");
    }
    else
    {
        $('#char').text(character);
    }
})


$("a[href^='#']").click(function(){//هنا هيجبلي اي لينك هيبدا ب # عشان لو حاطط مثلا لينك جوجل
    let currentHref = $(this).attr('href');
    let currentOffset = $(currentHref).offset().top;
    $('body,html').animate({scrollTop:currentOffset},1500)

    $(this).css('color','brown');
    $(this).siblings().css('color','white');

})
