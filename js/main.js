$(document).ready(function(){
  $("#fullpage").fullpage({
    scrollingSpeed: 900,
    anchors: ["firstpage","second-page","third-page"],
    menu: "#menu",
    scrollOverflow: true,
  });
});
