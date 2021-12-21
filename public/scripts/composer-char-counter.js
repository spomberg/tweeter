$(document).ready(function() {
  // Changes the character counter based on the length of the data in the text area,
  // also adds a negative counter ID when the length goes over 140 that turns the font red based on CSS settings. 
  $("#tweet-text").on('input', function() {
    const charCounter = 140 - $(this).val().length;
    const counter = $(this).parents().find('.counter');
    counter.html(charCounter);
    counter.text() < 0 ? counter.attr('id', "negative-counter") : counter.removeAttr('id', "negative-counter");
  });
});