'use strict';

var app = app || {};

(function(module) {
  let renderSubreddits = function () {
    // TODO: turn above into an array of objects of all the subjects so we can run handlebars on it.
    let handlebarsIsStupid = app.allSubreddits;
    let render = Handlebars.compile($('#subredditName-template').html());
    $('#subredditListAnchor').append(render({words: handlebarsIsStupid}));
  };

  module.renderSubreddits = renderSubreddits;
})(app);
