'use strict';

var app = app || {};

(function(module) {
  let initResultsPage = function() {
    $('.wordCloudResult').empty();
    $('.fa-reddit-alien').removeClass('fa-spin fa-3x fa-fw');
    $('.resultUl').append(app.selectedLi);

    let wordCloudImg = $('<img>');
    wordCloudImg.attr('src', app.wordCloudLink);
    $('.wordCloudResult').append(wordCloudImg);
    $('#imgCredit').show();
    $(wordCloudImg).on('click', function(){
      $(this).toggleClass('fullscreen');
    });
  };
  app.initResultsPage = initResultsPage;
})(app);
