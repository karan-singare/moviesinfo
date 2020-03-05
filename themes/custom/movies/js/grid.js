var $ = jQuery;

$(document).ready(function() {
  total_grid_items = $('.views-element-container > * > *');
  /* removing the empty total_grid_items */
  for (var i = 0; i < total_grid_items.length; i++) {
    if (total_grid_items[i].clientHeight < 40) {
      total_grid_items[i].remove();
    }
  }
  grid_items = $('.views-element-container > * > *').clone(true);
  $('.views-element-container > *').empty().addClass('grid-container');
  // console.log(grid_items);

  for (var i = 0; i < grid_items.length; i++) {
    $('.grid-container').append(grid_items[i]);
  }

  

});
