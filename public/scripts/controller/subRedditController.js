'use strict';

var app = app || {};

(function(module) {

  app.getSubreddits(app.getSubredditTitles, app.fillTableWithSubredditNames);

  app.renderSubreddits();

})(app);
