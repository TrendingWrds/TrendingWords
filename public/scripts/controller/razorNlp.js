'use strict';
var app = app || {};

(function(module) {

  let sendSubredditTitles = function (request, response) {
    $.post('/api/postRazor', {
      text: app.oneBigString,
      extractors: 'words'
    }).fail(console.error).then(response => console.log(response));
  };

  module.sendSubredditTitles = sendSubredditTitles;

})(app);
