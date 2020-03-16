function get_main_img_num() {
  url = $('.banner-container .item--1').css('background-image');
  index = url.lastIndexOf('.');
  img_num = Number(url.substr(index-1, 1));
  return img_num;
}
function add_content(heading, trailer) {
  $('.banner--content .banner--heading').html(heading);
  $('.banner--content .banner--trailer').html(trailer);
}
function slide_images_left(content) {
  $(document).on('click', '.banner-container .item--2', content, function(event) {
    // get url
    url = $('.banner-container .item--1').css('background-image');
    index = url.lastIndexOf('.');
    img_num = Number(url.substr(index-1, 1));
    var main_img_num;
    if (img_num == 0) {
      main_img_num = 1;
      url = url.substring(0, index-1) + 1 + '.' + url.substring(index+1);
      next_url = url.substring(0, index-1) + 2 + '.' + url.substring(index+1);
      prev_url = url.substring(0, index-1) + 0 + '.' + url.substring(index+1);
    } else if (img_num == 5) {
      main_img_num = 0;
      url = url.substring(0, index-1) + 0 + '.' + url.substring(index+1);
      next_url = url.substring(0, index-1) + 1 + '.' + url.substring(index+1);
      prev_url = url.substring(0, index-1) + 5 + '.' + url.substring(index+1);
    }else {
      main_img_num = Number(img_num+1);
      url = url.substring(0, index-1) + Number(img_num+1) + '.' + url.substring(index+1);
      next_url = url.substring(0, index-1) + Number(img_num+2) + '.' + url.substring(index+1);
      prev_url = url.substring(0, index-1) + Number(img_num) + '.' + url.substring(index+1);
    }
    urls = [prev_url, url, next_url];
    // set url
    for (var item of $('.banner-container > *')) {
      item.style.backgroundImage = urls.pop();
    }


    heading = content[main_img_num][1].querySelector('.views-field-field-movie-name a');
    trailer = content[main_img_num][1].querySelector('.views-field-field-trailer a');
    console.log(get_main_img_num());;
    // add_content(heading, trailer);
    $('.banner-container > *').addClass('slideInRight');
    setTimeout(function(){
      $('.banner-container > *').removeClass('slideInRight');
    },300);
  });
}
function slide_images_right(content) {
  $(document).on('click', '.banner-container .item--0', content, function(event) {
    // get url
    url = $('.banner-container .item--1').css('background-image');
    index = url.lastIndexOf('.');
    img_num = Number(url.substr(index-1, 1));
    if (img_num == 0) {
      main_img_num = 5;
      url = url.substring(0, index-1) + 5 + '.' + url.substring(index+1);
      next_url = url.substring(0, index-1) + 0 + '.' + url.substring(index+1);
      prev_url = url.substring(0, index-1) + 4 + '.' + url.substring(index+1);
    } else if (img_num == 5) {
      main_img_num = 0;
      url = url.substring(0, index-1) + 0 + '.' + url.substring(index+1);
      next_url = url.substring(0, index-1) + 5 + '.' + url.substring(index+1);
      prev_url = url.substring(0, index-1) + 3 + '.' + url.substring(index+1);
    }else {
      main_img_num = Number(img_num-1);
      url = url.substring(0, index-1) + Number(img_num-1) + '.' + url.substring(index+1);
      next_url = url.substring(0, index-1) + Number(img_num) + '.' + url.substring(index+1);
      prev_url = url.substring(0, index-1) + Number(img_num-2) + '.' + url.substring(index+1);
    }
    urls = [prev_url, url, next_url];
    // set url
    for (var item of $('.banner-container > *')) {
      item.style.backgroundImage = urls.pop();
    }
    add_content("heading", "trailer");
    $('.banner-container > *').addClass('slideInLeft');
    setTimeout(function(){
      $('.banner-container > *').removeClass('slideInLeft');
    },300);
  });
}
