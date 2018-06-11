jQuery(document).ready(function() {
  $('#preloader').css("display","block");
  realHeight = $('#preloader').parent().css( "height");
  realWidth = $('#preloader').parent().css( "width");
  $('#preloaderBackground').css("width", realWidth);
  $('#preloaderBackground').css("height", realHeight);
  $(window).resize(function() {
  realHeight = $('#preloader').parent().css( "height");
  realWidth = $('#preloader').parent().css( "width");
    $('#preloaderBackground').css("width", realWidth);
    $('#preloaderBackground').css("height", realHeight);
  });
});