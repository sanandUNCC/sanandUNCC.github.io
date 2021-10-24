$(document).ready(function() {
	$(".slide:first").show();
	setInterval(function(){ Next($('.slide:visible'))}, 2400);

});
function Next(slide) {
	slide.fadeOut();
	if(typeof slide.next().attr('src') !== 'undefined') {
		slide.next().fadeIn();
	} else {
		$('.slide:first').fadeIn();
	}
}