$(document).ready(function() {
  // Slides the form up and down when pressing the write a new tweet button
  $("nav").on("click", "button", function() {
    if ($(".new-tweet").is(":hidden")) {
      $(".new-tweet").slideDown();
      $("#tweet-text").focus();
    } else $(".new-tweet").slideUp();
  })
});