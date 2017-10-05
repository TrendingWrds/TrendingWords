'use strict';

var app = app || {};

(function(module) {
  let $searchbar = $('.searchbar');
  $searchbar.on('keyup', function() {
    let searchString = $searchbar.val().trim().toUpperCase();
    let filteredIn = $('.subredditNameLi').toArray().filter(function(li) {
      return li.id.includes(searchString);
    });
    $('.subredditNameLi').hide();
    $(filteredIn).show();
  });
})(app);
