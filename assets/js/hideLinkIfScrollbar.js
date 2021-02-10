let showLinkFunc = function() {
  var elm = document.getElementsByClassName("hide-if-scrollbar");
  if(elm) {
    if ($("body").height() > $(window).height()) {
      for (i = 0; i < elm.length; i++) {
        elm[i].style.display = "block";
      } 
    } else {
      for (i = 0; i < elm.length; i++) {
        elm[i].style.display = "none";
      } 
    }
  }
};

$(document).ready(showLinkFunc);
$(window).resize(showLinkFunc);
