$(document).ready(function () {

        // preload the image for each link
        $("#image_list a").each(function () {
                var slide = new Image();
                slide.src = $(this).attr("href");
        });

        // set up the event handlers for each link
        $("#image_list a").click(function (evt) {

                // get the image URL and caption for each image and animate the caption
                var imageURL = $(this).attr("href");
                var pic = $("#image").attr("src", imageURL)
                pic.fadeOut(3000);
                pic.next().fadeIn(3000);

                var caption = $(this).attr("title");
                var cap = $("#caption").text(caption)
                cap.fadeOut(3000);
                cap.next().fadeIn(3000);


                callback(pic, cap);

                // cancel the default action of each link
                evt.preventDefault();
        });
        callback = function (pic, cap) {
                pic.fadeOut(3000);
                cap.fadeOut(3000);
        }
        // move the focus to the first link
        $("li:first-child a").focus();
}); // end ready