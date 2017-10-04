'use strict';
var app = app || {};

(function(module) {

  let sendSubredditTitles = function () {
    console.log('call within nlp ');
    $.post('/api/postRazor', {
      text: app.oneBigString,
      extractors: 'words'
    }).fail(console.error).then(response => console.log(response));
  };

  module.sendSubredditTitles = sendSubredditTitles;

})(app);
