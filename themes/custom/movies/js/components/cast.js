var $ = jQuery;

$(document).ready(function() {
  $('.fullcast').children().slice(0, 1).addClass('fullcast--image');
  $('.fullcast').children().slice(1, 3).wrapAll('<div class="fullcast--details"></div>');
  $('.fullcast').children().slice(2, 3).wrapAll('<div class="fullcast--info"></div>');
  /* grabbing the img url */
  var img_url = $('.fullmovie img').attr('src');
  /* making img transparent */
  $('.fullmovie img').css({
    'opacity' : 0,
  });
  $('.fullcast--details').children().eq(0).addClass('fullcast--movies');
  $('.fullcast--movies').prepend('<div>Movies: </div>');
  /* setting the same image as background image for that item */
  // $('.fullmovie').children().first().css({
  //   'background-image': 'url('+ img_url +')',
  // });
  // $('.fullmovie--details').children().slice(1, 3).wrapAll('<div class="fullmovie--genre"></div>');
  // $('.fullmovie--details').children().slice(0, 1).addClass('fullmovie--name');
  // $('.fullmovie').children().slice(0, 1).addClass('fullmovie--image');
});
