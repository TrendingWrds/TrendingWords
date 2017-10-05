'use strict';

var app = app || {};

(function(module) {
  // hide everything that we dont want to see
    // hiding all non-selected subreddits
  // show resulting image, and link to selected subreddit
    // home and about buttons showing
  let initResultsPage = function() {
    $('.subreddit-lists').hide();
    $('.subreddit-search').hide();
    $('.directions').hide();
    let wordCloudImg = $('<img>');
    wordCloudImg.attr('src', app.wordCloudLink);
    $('.wordCloudResult').append(wordCloudImg);
  };

  app.initResultsPage = initResultsPage;
})(app);
