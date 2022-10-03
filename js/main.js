var notes = ['B','c','c#','d','d#','e','f','f#','g','g#','a','a#','b','C'];
var keybind = ['S','D','R','F','T','G','H','U','J','I','K','O','L','º'];

$(function(){
  setup();

  $('input[type="radio"]').change(function(){
    var checked = $('input[type="radio"]:checked').attr("id");
    
    if(checked == "showkeys") {
      $("html").addClass("keybind");
    } else {
      $("html").removeClass("keybind");
    }
  });