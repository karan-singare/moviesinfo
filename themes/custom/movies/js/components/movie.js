var $ = jQuery;

$(document).ready(function() {
  $('.fullmovie').children().slice(1, 8).wrapAll('<div class="fullmovie--details"></div>');
  $('.fullmovie--details').next().addClass('fullmovie--synopsis');
  /* grabbing the img url */
  var img_url = $('.fullmovie img').attr('src');
  /* making img transparent */
  $('.fullmovie img').css({
    'opacity' : 0,
  });
  /* setting the same image as background image for that item */
  $('.fullmovie').children().first().css({
    'background-image': 'url('+ img_url +')',
  });
  $('.fullmovie--details').children().slice(1, 3).wrapAll('<div class="fullmovie--genre"></div>');
  $('.fullmovie--details').children().slice(0, 1).addClass('fullmovie--name');
  $('.fullmovie').children().slice(0, 1).addClass('fullmovie--image');
});
