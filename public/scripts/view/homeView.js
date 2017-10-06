'use strict';

var app = app || {};

(function(module) {
  let showMain = function () {
    $('#main').show();
    $('#aboutUs').hide();
    $('.wordCloudResult').empty();
    $('.subreddit-lists').show();
    $('.subreddit-search').show();
    $('.directions').show();
    $('#imgCredit').hide();
  };

  let renderSubreddits = function (callback) {

    Handlebars.registerHelper('makeAllCaps', function(text) {
      return text.toUpperCase();
    });

    let render = Handlebars.compile($('#subredditName-template').html());
    $('#subredditListAnchor').append(render({keys: app.allSubreddits}));
    callback && callback();
  };

  let addListeners = function (){$('.subredditName').on('click', function(){
    app.subredditDestination = this.id;
    app.selectedLi = this.parentElement;
    app.getSubredditTitles(app.sendSubredditTitles, app.subredditDestination, app.initResultsPage);
  });};

  module.showMain = showMain;
  module.renderSubreddits = renderSubreddits;
  module.addListeners = addListeners;
})(app);
