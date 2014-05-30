var checkbox;
var search;
var scrollPos;
var elementHeight;
var fontSize;


	$(document).ready(function() {
		checkbox = $('.transitional_nav');
		checkbox = $('.search');
		adjustnav(checkbox);

		window.addEventListener("resize", adjustnav, false);
		window.addEventListener("load",   adjustnav, false);
		window.addEventListener("scale",  adjustnav, false);
		window.addEventListener("zoomed",  adjustnav, false);


});

$('.top_level_nav_item').change(function(){

	var theID = $(this).attr('id');
	theID = '.' + theID;
	console.log(theID);
	var theLabel = $(this).siblings(theID);

		if($(this).is(':checked'))
		{
				// Checkbox is checked.
				var numChildren = theLabel.children('div').length;
				console.log("numChildren: " + numChildren);
				console.log("height: " + elementHeight * numChildren + "px");

				theLabel.css({
					"height": elementHeight * numChildren + "px"
				});
		}
		else
		{
				// Checkbox is not checked.
				// remove all inline css
				theLabel.css({
					"height": elementHeight + "px"
				});
		}

});


function adjustnav(checkbox)
{
	var zoomHeight = window.innerHeight;
	var ViewportHeight = document.documentElement.clientHeight;
	// var windowHeight = screen.height + 180;
	var windowHeight = ViewportHeight;
	var zoom = zoomHeight / ViewportHeight;
	console.log("zoom: " + zoom);

	console.log("root viewport height: " + ViewportHeight);
	console.log("zoomed viewport height: " + zoomHeight);
	console.log("windowheight: " + windowHeight);

	elementHeight = ViewportHeight / 12 * zoom;
	fontSize = elementHeight / 2;

	console.log("elementHeight: " + elementHeight);

	$(".mobile_nav_item").css({
		"height": 0,
		"font-size": 0,
		"line-height": 0
	});

	$(".mobile_nav_item").css({
		"height": elementHeight + "px",
		"font-size": fontSize + "px",
		"line-height": elementHeight + "px"
	});

	$(".mobile_nav_item2x").css({
		"height": elementHeight*2 + "px",
		"font-size": fontSize + "px",
		"line-height": elementHeight + "px"
	});

	$(".mobile_nav_item3x").css({
		"height": elementHeight*3 + "px",
		"font-size": fontSize + "px",
		"line-height": elementHeight + "px"
	});

	$(".accountfunctions").css({
		"font-size": fontSize/1.5 + "px",
		"line-height": fontSize + "px"
	});

}
