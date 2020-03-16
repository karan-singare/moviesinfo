/*
  Drupal uses jQuery in a no-conflict mode. In jQuery, $ is an alias for jQuery. Other javascript libraries often use $ as a function or variable name.
*/
var $ = jQuery;// creating the alias

$(document).ready(function() {
  $.ajax({
    type: 'post',
    url: 'path_handler.php?get_path=true',
    dataType: 'json',
    success: function(response) {
      if (response.page == 'latest-movies') {
        $('.grid-container .views-row').addClass('movie');
        img_urls = [];
        grid_items = $('.grid-container .views-row');

        movie_images = $('.grid-container .views-row img');

        var grid_items_array = Object.keys(grid_items).map(function(key) {
          return [Number(key), grid_items[key]];
        });

        i=0;
        for (var image of movie_images) {
          grid_items_array[i][1].style.backgroundImage = "url('" + image.src + "')";
          i++;
        }

      }


      if (response.page == 'casts') {
        $('.grid-container .views-row').addClass('cast');
        img_urls = [];
        grid_items = $('.grid-container .views-row');

        movie_images = $('.grid-container .views-row img');

        var grid_items_array = Object.keys(grid_items).map(function(key) {
          return [Number(key), grid_items[key]];
        });

        i=0;
        for (var image of movie_images) {
          grid_items_array[i][1].style.backgroundImage = "url('" + image.src + "')";
          i++;
        }
      }

      if (response.page == 'movies-news') {
        $('.grid-container .views-row').addClass('news');
        img_urls = [];
        grid_items = $('.grid-container .views-row');

        movie_images = $('.grid-container .views-row img');

        var grid_items_array = Object.keys(grid_items).map(function(key) {
          return [Number(key), grid_items[key]];
        });

        i=0;
        for (var image of movie_images) {
          grid_items_array[i][1].style.backgroundImage = "url('" + image.src + "')";
          i++;
        }
      }


      /* remoing the redundant block */
      if (response.page == '') {
        $('.region.region--banner').empty();
        movies_block_path = '.region.region-banner #block-views-block-banner-block-1';
        banner_items = $('.region.region-banner #block-views-block-banner-block-1 .views-row').clone(true);
        $(movies_block_path).empty();
        $(movies_block_path).addClass('banner-container');

        var banner_items_array = Object.keys(banner_items).map(function(key) {
          return [Number(key), banner_items[key]];
        });
        main_items_array = banner_items_array.slice(0, 6);

        $('.banner-container').append('<button class="item--0"></button>');
        $('.banner-container').append('<a href="#" class="item--1"></a>');
        $('.banner-container').append('<button class="item--2"></button>');

        $('.banner-container .item--1').append('<div class="banner--content"></div>');
        $('.banner-container .banner--content').append('<p class="banner--heading">panipat</p>');
        $('.banner-container .banner--content').append('<p class="banner--trailer">watch the trailer</p>');

        /* sliding functionality */

        $('.banner-container .item--2').click(function() {
          content = main_items_array;
          slide_images_left(content);
        });

        $('.banner-container .item--0').click(function() {
          content = main_items_array;
          slide_images_right(content);
        });


        /*some crazy tweakings*/
        $('#block-movies-content').remove();
        $("main div[id*='block-views-block']:first-child");
        $("main div[id*='block-views-block'] h2.grid-container").remove();
        $("main").remove();






      }
    }
  });

});
