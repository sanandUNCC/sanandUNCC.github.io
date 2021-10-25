//code is the framework provided by the book without the caption segment
$(document).ready(function() {
    //code segment preloads the images from the list in the HTML
    $("#slide_images a").each(function() {
        //there is a new image made each loop
        var slide = new Image();
        //attaches the image's src to the href attribute of the image being looked
        slide.src = $(this).attr("href");
    });

    //code segment displays the image clicked on
    $("#slide_images a").click(function(evt) {
        //slideURL stores the href attribute of the image being looked at 
        var slideURL = $(this).attr("href");  
        //the element with the class "slide_main_image" has its src attribute 
        //set to the slideURL variable
        $(".slide_main_image").attr("src", slideURL); 
        //the textbook says that this cancel's the default action of the link
        evt.preventDefault();
    });

});

