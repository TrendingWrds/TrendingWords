'use strict';

var app = app || {};

(function(module) {

  // this runs the get subreddits function which passes the functions to get the subreddit titles and the function that sets up a route to send them to the server side via callbacks to avoid async
  app.getSubreddits(app.fillTableWithSubredditNames, app.renderSubreddits, app.addListeners);

app.getSubredditTitles
app.sendSubredditTitles

})(app);
