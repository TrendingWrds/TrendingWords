'use strict';

var app = app || {};

(function(module) {

  let renderSubreddits = function () {
    // TODO: turn above into an array of objects of all the subjects so we can run handlebars on it.
    let newArray = [];
    for (var i = 0; i < app.allSubreddits.length; i++) {
      newArray.push({
        key: 'subredditName',
        value: [i]
      });
    }
    let render = Handlebars.compile($('#subredditName-template').text());
    $('#subredditListAnchor').append(newArray.map(render));
  };

  module.renderSubreddits = renderSubreddits;
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
