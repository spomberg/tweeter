$(document).ready(function () {
  // Adds box-shadow while hovering over the tweet box
  $("#tweets-container").on("mouseover", ".tweet", function() {
    $(this).css('box-shadow', '5px 10px #afc4e3'); 
  })
  
  // Removes box-shadow once the mouse leaves the tweet
  $("#tweets-container").on("mouseleave", ".tweet", function() {
    $(this).css('box-shadow', ''); 
  })

  // Changes the color of the icons while hovering over them
  $("#tweets-container").on("mouseover", "button", function() {
    $(this).css('color', '#a19a40');
  })

  // Changes the color back once the mouse leaves the button
  $("#tweets-container").on("mouseleave", "button", function() {
    $(this).css('color', '#4056A1'); 
  })
});