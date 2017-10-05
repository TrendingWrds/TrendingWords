'use strict';

var app = app || {};

(function(module) {
  let showAbout = function () {
    $('#aboutUs').show();
    $('#main').hide();
  };
  app.showAbout = showAbout;
})(app);
