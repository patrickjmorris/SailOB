$(document).ready(function() {

  // Link to top of page without changing URL
  $('.back-to-top a').click(function(e) {
    e.preventDefault();
    $(window).scrollTop(0);
  })
});