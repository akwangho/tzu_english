function initOtherlinkContent() {
  $("#main2_3 #subtitle_3").append($("#otherlink_content"));
  $("#rightOtherlink #subtitle_3").append($("#otherlink_content").clone());
}

function initAll() {
  initHumble();
  initRightMenuAnimation();
  initSlidingImg();
  initOtherlinkContent();
		  
  initTopMenuFadeIn( "#tableOrg", "#MenuBarOrg" );
  initTopMenuFadeIn( "#tableFounder", "#MenuBarFounder" );
  initTopMenuFadeIn( "#tableObjectives", "#MenuBarObjectives" );
  initTopMenuFadeIn( "#tableWorld", "#MenuBarWorld" );
  initTopMenuFadeOut();
}