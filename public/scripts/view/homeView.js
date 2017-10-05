'use strict';

var app = app || {};

(function(module) {
  Handlebars.registerHelper('makeAllCaps', function(text) {
    return text.toUpperCase();
  });

  let renderSubreddits = function () {
    let render = Handlebars.compile($('#subredditName-template').html());
    $('#subredditListAnchor').append(render({keys: app.allSubreddits}));
  };

  module.renderSubreddits = renderSubreddits;
})(app);
