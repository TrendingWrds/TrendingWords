'use strict';

var app = app || {};

(function(module) {
  let renderSubreddits = function (callback) {
    let render = Handlebars.compile($('#subredditName-template').html());
    $('#subredditListAnchor').append(render({keys: app.allSubreddits}));
    callback && callback();
  };

  let addListeners = function (){$('li.subreddit').on('click', function(){
    console.log( $(this) );
    app.subredditDestination = this.id;
    app.getSubredditTitles(app.sendSubredditTitles, app.subredditDestination);
  });};

  module.renderSubreddits = renderSubreddits;
  module.addListeners = addListeners;
})(app);
