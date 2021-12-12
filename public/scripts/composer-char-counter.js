$(document).ready(function () {
  $("#tweet-text").on('input', function () {
    const charCounter = 140 - $(this).val().length;
    const counter = $(this).parent().find('.counter');
    counter.html(charCounter);
    counter.text() < 0 ? counter.attr('id', "negative-counter") : counter.removeAttr('id', "negative-counter");
  })
});