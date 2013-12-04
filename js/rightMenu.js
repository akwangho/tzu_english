function initRightMenuAnimation() {
	var speed = 150;
	   $( ".rightButton" ).hover(function() {
		   $( this ).animate({
			  left: 0
		   }, speed);
	   }, function() {
		   $( this ).animate({
			  left: -30
		   }, speed);
	   });
}