function initTopMenuFadeIn(tableElement, menuBarElement) {
  $(tableElement).hover(function() {
	var middlePosition = $(this).position().left + $(this).width()/2 - 20;
	$( "#floatingSubmenuContent" ).html( $(menuBarElement).html());
	$( "#floatingSubmenu" ).css({left: middlePosition});
	$( "#floatingSubmenu" ).fadeIn(100);
  }, null);
}

function initTopMenuFadeOut() {
  // ?��??��?submenu消失
  $(".floatingUl").show(0);
  $( "#floatingSubmenu" ).fadeOut(0);
  
  // ?��??��?下面?��??�現象�?�?(讓floatingUl?�爸?��?�?
  $(".floatingUl").parent().hide();
  
  $( "#button_top, #main_top, #floatingSubmenu" ).hover( null, function() {
	$( "#floatingSubmenu" ).fadeOut(100);
  });
}