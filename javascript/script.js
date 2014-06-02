var checkbox;
var scrollPos;
var elementHeight;
var fontSize;


	$(document).ready(function() {
		checkbox = $('.transitional_nav');
		adjustnav(checkbox);

		window.addEventListener("resize", adjustnav, false);
		window.addEventListener("load",   adjustnav, false);
		window.addEventListener("scale",  adjustnav, false);
		window.addEventListener("zoomed",  adjustnav, false);
		window.addEventListener("orientationchange",  adjustnav, false);

	});

$('.transitional_nav').change(function() {
	if($(this).is(':checked'))
	{
		// alert('nav open');
		$('#content').hide();
		$('body').css({
			'height': '100%',
			'overflow': 'hidden'
		});


	} else {
		// alert('nav closed');
		$('#content').show();
		$('body').css({
			'overflow': 'scroll',
			'height': 'auto'
		});

	}
});

// $('body').on("touchmove", function(event) {
// 	if($('.transitional_nav').is(':checked'))
// 	{
// 		event.preventDefault();
// 		event.stopPropagation();
// 	}
// });

$('.top_level_nav_item').change(function(){
	// read out the ID of the checkbox and find the label with the matching class name
	var theID = $(this).attr('id');
	var theClass = '.' + theID;
	var theLabel = $(this).siblings(theClass);

		if($(this).is(':checked'))
		{
				// Checkbox is checked.
				expand(theLabel);
				collapseAllOthers(theID);
				// preventBodyScroll();

		} else {
				// Checkbox is not checked.
				collapse(theLabel);

		}

});

function expand(theLabel) {
	var numChildren = theLabel.children('div').length;
	console.log("numChildren: " + numChildren);
	console.log("height: " + elementHeight * numChildren + "px");

	theLabel.css({
		"height": elementHeight * numChildren + 40 + "px"
	});
}

function preventBodyScroll() {
	// $('article').css({
	// 	'display': 'none'
	// });
	$('article').on("touchmove", function(event) {
			event.preventDefault();
			event.stopPropagation();
	});
}

function collapse(theLabel) {
	var myInput = theLabel.attr('for');
	console.log(myInput);
	myInput = '#' + myInput;


	// remove all inline css
	theLabel.css({
		"height": elementHeight + "px"
	});
	$(myInput).removeAttr('checked');
}

function collapseAllOthers(theID) {
	$('.mobile_nav_item').each(function() {
		var theLabel = $(this);
		if(!theLabel.hasClass(theID)) {
			collapse(theLabel);
		}
	});
	scrollAdjust(theID);
}

function scrollAdjust(theID) {
		// Find the position index of the clicked navigation item
		var navItemIndex = $('#' + theID).index('input');
		$('.mobile_nav_label').scrollTop(elementHeight*(4 + navItemIndex)-10);
}


function adjustnav(checkbox)
{
	// prevent scrolling of the body content while the nav is active

	var zoomHeight = window.innerHeight;
	var ViewportHeight = document.documentElement.clientHeight;
	var zoom = zoomHeight / ViewportHeight;

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
