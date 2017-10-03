'use strict';

var app = app || {};

(function(module) {

  let renderSubreddits = function () {
    let allSubredditsObjects = {};
    // TODO: turn above into an array of objects of all the subjects so we can run handlebars on it.

    let render = Handlebars.compile($('#subredditName-template').text());
    $('#subredditListAnchor').append(app.allSubreddits.map(render));
  };

  module.renderSubreddits = renderSubreddits;
})(app);
