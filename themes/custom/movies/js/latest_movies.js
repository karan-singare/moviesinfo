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
        // $('.region.region--banner').empty();
        // movies_block_path = '.region.region-banner #block-views-block-banner-block-1';
        // banner_items = $('.region.region-banner #block-views-block-banner-block-1 .views-row').clone(true);
        // $(movies_block_path).empty();
        // $(movies_block_path).addClass('banner-container');
        //
        //
        // var banner_items_array = Object.keys(banner_items).map(function(key) {
        //   return [Number(key), banner_items[key]];
        // });
        // main_item_array = [];
        // for (var i = 0; i < 3; i++) {
        //   main_item_array.push(banner_items_array[i]);
        // }
        //
        //
        // for (var i = 0; i < main_item_array.length; i++) {
        //   $('.banner-container').append(main_item_array[i][1]);
        //   src = main_item_array[i][1].querySelector('img').src;
        //   main_item_array[i][1].className = main_item_array[i][1].className + ' item--' + i;
        // }
        $('.region.region--banner').empty();
        movies_block_path = '.region.region-banner #block-views-block-banner-block-1';
        $(movies_block_path).empty();
        $(movies_block_path).addClass('banner-container');


        // var banner_items_array = Object.keys(banner_items).map(function(key) {
        //   return [Number(key), banner_items[key]];
        // });
        // main_item_array = [];
        // for (var i = 0; i < 3; i++) {
        //   main_item_array.push(banner_items_array[i]);
        // }


        // for (var i = 0; i < main_item_array.length; i++) {
        //   $('.banner-container').append(main_item_array[i][1]);
        //   src = main_item_array[i][1].querySelector('img').src;
        //   main_item_array[i][1].className = main_item_array[i][1].className + ' item--' + i;
        // }
        // for (var i = 0; i < 3; i++) {
        //   $('.banner-container').append('<div class="item--' + i + '"></div>');
        // }
        $('.banner-container').append('<button class="item--0"></button>');
        $('.banner-container').append('<a href="#" class="item--1"></a>');
        $('.banner-container').append('<button class="item--2"></button>');

        $('.banner-container .item--1').append('<div class="banner--content"></div>');
        $('.banner-container .banner--content').append('<p class="banner--heading">panipat</p>');
        $('.banner-container .banner--content').append('<p class="banner--trailer">watch the trailer</p>');

        /* sliding functionality */
        $('.banner-container .item--2').click(function() {
          console.log($('.banner-container .item--1'));
        });


      }
    }
  });

});
