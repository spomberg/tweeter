$(document).ready(function () {
  $('.tweet').hover(function() {
    $(this).css('box-shadow', '5px 10px #afc4e3');
  }, 
    function() {
      $(this).css('box-shadow', '');
    }
  )

  $('.fa-solid fa-flag').hover(function() {
    $(this).css('color', 'gold');
    console.log(this);
  },
    function() {
      $(this).css('color', '#4056A1');
    }
  )
});