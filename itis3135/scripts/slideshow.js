$(document).ready(() => {
    $("#slide_images a").each(function() {
        var slide = new Image();
        slide.src = $(this).attr("href");

    });

    $("#slide_images a").click(function(evt) { 
        var imageURL = $(this).attr("href"); 
        $("#main_image").attr("src", imageURL); 
        evt.preventDefault();
    });

    $(".slide:first").show();
    setInterval(function () { Next($('.slide:visible')) }, 2400);



});

function Next(slide) {
    slide.fadeOut();
    if (typeof slide.next().attr('src') !== 'undefined') {
        slide.next().fadeIn();
    } else {
        $('.slide:first').fadeIn();
    }
}
