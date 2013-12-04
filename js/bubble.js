function initTopMenuFadeIn(tableElement, menuBarElement) {
  $(tableElement).hover(function() {
	var middlePosition = $(this).position().left + $(this).width()/2 - 20;
	$( "#floatingSubmenuContent" ).html( $(menuBarElement).html());
	$( "#floatingSubmenu" ).css({left: middlePosition});
	$( "#floatingSubmenu" ).fadeIn(100);
  }, null);
}

function initTopMenuFadeOut() {
  // 開始時讓submenu消失
  $( "#floatingSubmenu" ).fadeOut(0);
  
  // 開始時讓下面的靈異現象消失 (讓floatingUl的爸爸消失)
  $(".floatingUl").parent().hide();
  
  $( "#button_top, #main_top, #floatingSubmenu" ).hover( null, function() {
	$( "#floatingSubmenu" ).fadeOut(100);
  });
}