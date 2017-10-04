'use strict';

var app = app || {};

(function(module) {
  const homeView = {};
  homeView.newArray = [];

  homeView.renderSubreddits = function () {
    // TODO: turn above into an array of objects of all the subjects so we can run handlebars on it.
    console.log(app.allSubreddits);
    for (var i = 0; i < app.allSubreddits.length; i++) {
      homeView.newArray.push({
        key: 'subredditName',
        value: [i]
      });
    }
    let render = Handlebars.compile($('#subredditName-template').text());
    $('#subredditListAnchor').append(homeView.newArray.map(render));
  };

  module.homeView = homeView;
})(app);




// let newArray = app.allSubreddits.slice();
// let keys = newArray.shift();
// newArray = newArray.map(function(e) {
//   let obj = {};
//   keys.forEach(function(key,i){
//     obj[key] = e[i];
//   });
//   console.log('hello');
  // return obj;
