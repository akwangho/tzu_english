function initSlidingImg() {
  // find the elements to be eased and hook the hover event
  $('.slidingImg ul li a').hover(function() {
	// 依照滑鼠所在圖片改變說明文字
    $("#slindingImgText").text($(this).text());
    // if the element is currently being animated
    if ($(this).is(':animated')) {
      $(this).stop().animate({width: "447px"}, {duration: 450, easing:"easeOutQuad", complete: "callback"});
    } else {
      // ease in quickly
      $(this).stop().animate({width: "447px"}, {duration: 400, easing:"easeOutQuad", complete: "callback"});
    }
  }, function () {
    // on hovering out, ease the element out
    if ($(this).is(':animated')) {
      $(this).stop().animate({width: "78px"}, {duration: 400, easing:"easeInOutQuad", complete: "callback"})
    } else {
      // ease out slowly
      $(this).stop(':animated').animate({width: "78px"}, {duration: 450, easing:"easeInOutQuad", complete: "callback"});
    }
  });
}