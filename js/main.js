$(document).ready(function() {

  // Global vars
  var $mainTitle = $('.main-title');
  var $mainSubtitle = $('.main-subtitle');
  var mainTitleFontSize = parseInt($mainTitle.css('font-size'));
  var windowScroll;

  // Apply Fittext to titles to make it scale responsively in a smooth fashion
  $mainTitle.fitText(1, { minFontSize: '40px', maxFontSize: '96px' });
  $mainSubtitle.fitText(1.2, {minFontSize: '24px', maxFontSize: '48px'});

  
});