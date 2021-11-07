$(document).ready(function () {

        // preload the image for each link
        $("#image_list a").each(function () {
                var slide = new Image();
                slide.src = $(this).attr("href");
        });

        // set up the event handlers for each link
        $("#image_list a").click(evt => {

                // get the image URL and caption for each image and animate the caption

                var image = evt.currentTarget

                $("#caption").animate({ fontSize: "1.5em" });

                var imageURL = image.href;

                $("#image").fadeOut(3000, function () {
                        $("#image").attr('src', imageURL).fadeIn(3000);
                });


                var caption = image.title;

                $("#caption").fadeOut(3000, function () {
                        $("#caption").text(caption).fadeIn(3000, function () {
                                $("#caption").animate({ fontSize: "2.0em" }, 3000);
                        });
                });

                // cancel the default action of each link
                evt.preventDefault();
        });

        // move the focus to the first link
        $("li:first-child a").focus();
}); // end ready