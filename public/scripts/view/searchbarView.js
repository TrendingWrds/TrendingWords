'use strict';

var app = app || {};

(function(module) {
  let $searchbar = $('.searchbar');
  $searchbar.on('keyup', function() {
    let searchString = $searchbar.val().trim().toUpperCase();
    console.log(searchString);
    let filteredIn = $('.subredditNameLi').toArray().filter(function(li) {
      return li.id.includes(searchString);
    });
    console.log(filteredIn);
    let filteredOut = $('.subredditNameLi').toArray().filter(function(li){
      return !li.id.includes(searchString);
    });
    console.log(filteredOut);
    $(filteredIn).show();
    $(filteredIn).each((idx, item) => {
      $(item).next().show();
    });
    $(filteredOut).hide();
    $(filteredOut).each((idex, item) => {
      $(item).next().hide();
    });
  });
})(app);
