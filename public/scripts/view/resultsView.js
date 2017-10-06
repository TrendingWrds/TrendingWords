'use strict';

var app = app || {};

(function(module) {
  let initResultsPage = function() {
    $('.wordCloudResult').empty();
    $('.subreddit-lists').hide();
    $('.subreddit-search').hide();
    $('.directions').hide();
    $('#imgCredit').show();
    $('.resultUl').append(app.selectedLi);

    let wordCloudImg = $('<img>');
    wordCloudImg.attr('src', app.wordCloudLink);
    $('.wordCloudResult').append(wordCloudImg);
  };

  app.initResultsPage = initResultsPage;
})(app);
