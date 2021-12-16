$(document).ready(function() {
  // Adds box-shadow while hovering over the tweet box
  $("#tweets-container").on("mouseover", ".tweet", function() {
    $(this).css('box-shadow', '5px 8px #afc4e3');
  });
  
  // Removes box-shadow once the mouse leaves the tweet
  $("#tweets-container").on("mouseleave", ".tweet", function() {
    $(this).css('box-shadow', '');
  });

  // Changes the color of the icons while hovering over them
  $("#tweets-container").on("mouseover", "button", function() {
    $(this).css('color', '#a19a40');
  });

  // Changes the color back once the mouse leaves the button
  $("#tweets-container").on("mouseleave", "button", function() {
    $(this).css('color', '#4056A1');
  });

  // Shows the scroll up button when the user scrolls down and hides it when they scroll up
  $(window).scroll(function() {
    $(this).scrollTop() < 100 ? $("#scroll-up").hide(500) : $("#scroll-up").show(500);
  });

  // Reveals the form and focus the text area when the button is pressed
  $("#scroll-up").click(function() {
    $(window).scrollTop(0);
    $(".new-tweet").slideDown();
    $("#tweet-text").focus();
  });
});