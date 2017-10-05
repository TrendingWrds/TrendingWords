'use strict';

var app = app || {};

(function(module) {

  let renderSubreddits = function (callback) {

    Handlebars.registerHelper('makeAllCaps', function(text) {
      return text.toUpperCase();
    });

    let render = Handlebars.compile($('#subredditName-template').html());
    $('#subredditListAnchor').append(render({keys: app.allSubreddits}));
    callback && callback();
  };

  let addListeners = function (){$('.subredditName').on('click', function(){
    console.log( $(this) );
    app.subredditDestination = this.id;
    app.getSubredditTitles(app.sendSubredditTitles, app.subredditDestination);
  });};

  module.renderSubreddits = renderSubreddits;
  module.addListeners = addListeners;
})(app);
