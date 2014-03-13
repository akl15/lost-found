$(document).ready( function() {


// THIS GIVES THE DROPDOWN MENU A SMOOTH TRANSITION
	$("#navToggle").click( function() {
		$("nav").slideToggle(1000);

	});


// THIS MAKES THE NAVIGATION TURN INTO A DROPDOWN MENU ON RESIZE
	$(window).resize( function() {
		var windowWidth = $(window).width();
		if (windowWidth>1000) {
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
		if (windowWidth>1000) {
			$("#navToggle").css("display","none");
			$("nav").show();
		}
		else {
			$("#navToggle").css("display","block");
			$("nav").hide();
		}
	});


// THIS DELETES AN ITEM FROM THE CART
	$("#delitem1").click( function() {
		$(".cartitem1").css("display","none");
		$(".cartitem2").show();

	});



});