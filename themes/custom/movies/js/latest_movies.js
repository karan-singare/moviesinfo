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
    }
  });

});
