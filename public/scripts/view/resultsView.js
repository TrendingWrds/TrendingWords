'use strict';

var app = app || {};

(function(module) {
  // hide everything that we dont want to see
    // hiding all non-selected subreddits
  // show resulting image, and link to selected subreddit
    // home and about buttons showing
  let initResultsPage = function(url) {
    $('.subreddit-lists').hide();
    $('.subreddit-search').hide();
    $('.directions').hide();

  };
  app.initResultsPage = initResultsPage;
})(app);
