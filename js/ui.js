$(document).ready( function() {


// THIS GIVES THE DROPDOWN MENU A SMOOTH TRANSITION
	$("#navToggle").click( function() {
		$("nav").slideToggle(1000);

	});


// THIS MAKES THE NAVIGATION TURN INTO A DROPDOWN MENU ON RESIZE
	$(window).resize( function() {
		var windowWidth = $(window).width();
		if (windowWidth>885) {
			$("#navToggle").css("display","none");
			$("nav").show();
		}
		else {
			$("#navToggle").css("display","block");
			$("nav").hide();
		}
	});


// THIS MAKES THE NAVIGATION TURN INTO A DROWPDOWN MENU ON PAGE LOAD
	$(document).ready( function() {
		var windowWidth = $(window).width();
		if (windowWidth>885) {
			$("#navToggle").css("display","none");
			$("nav").show();
		}
		else {
			$("#navToggle").css("display","block");
			$("nav").hide();
		}
	});

});