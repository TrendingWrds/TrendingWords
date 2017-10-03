'use strict';

var app = app || {};

(function(module) {

  app.getSubreddits(app.getSubredditTitles('AskReddit'), app.fillTableWithSubredditNames);

})(app);
