'use strict';

var app = app || {};

(function(module) {
  app.getSubreddits(module.renderSubreddits);

  let renderSubreddits = function () {
    var render = Handlebars.compile($('#subredditName-template').text());

    $('#subredditListAnchor').append(app.allSubreddits.map(render));
  };

  module.renderSubreddits = renderSubreddits;
})(app);
