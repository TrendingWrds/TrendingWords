'use strict';
var app = app || {};

(function(module) {

let sendSubredditTitles = function () {
    $.post('/api/postRazor', {
      text: app.oneBigString,
      extractors: 'words'
    }).fail(console.error);
  };

  module.sendSubredditTitles = sendSubredditTitles;

})(app);
