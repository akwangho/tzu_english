function initTopMenuFadeIn(tableElement, menuBarElement) {
  $(tableElement).hover(function() {
	var middlePosition = $(this).position().left + $(this).width()/2 - 20;
	$( "#floatingSubmenuContent" ).html( $(menuBarElement).html());
	$( "#floatingSubmenu" ).css({left: middlePosition});
	$( "#floatingSubmenu" ).fadeIn(100);
  }, null);
}

function initTopMenuFadeOut() {
  // ?‹å??‚è?submenuæ¶ˆå¤±
  $(".floatingUl").show(0);
  $( "#floatingSubmenu" ).fadeOut(0);
  
  // ?‹å??‚è?ä¸‹é¢?„é??°ç¾è±¡æ?å¤?(è®“floatingUl?„çˆ¸?¸æ?å¤?
  $(".floatingUl").parent().hide();
  
  $( "#button_top, #main_top, #floatingSubmenu" ).hover( null, function() {
	$( "#floatingSubmenu" ).fadeOut(100);
  });
}