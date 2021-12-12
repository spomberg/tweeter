$(document).ready(function () {
  // Adds box-shadow while hovering over the tweet box
  $('.tweet').hover(function() {
    $(this).css('box-shadow', '5px 10px #afc4e3');
  }, 
    function() {
      $(this).css('box-shadow', '');
    }
  )

  // Changes the color of the icons while hovering over them
  $(".icons button").hover(function() {
    $(this).css('color', '#a19a40');
  },
    function() {
      $(this).css('color', '#4056A1');
    }
  )
});