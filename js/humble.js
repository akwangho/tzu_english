function initHumble() {
var speed = 150;
  if ($( "#humblerH2" ).height() == 0) {
    $( "#humbleH1Header" ).hover(function() {
      $( "#humblerH2" ).animate({
        height: $( "#humblerH2" )[0].scrollHeight+'px'
      }, speed);
    }, function() {
      $( "#humblerH2" ).animate({
        height: '0px'
      }, speed);  
    });
  }
}