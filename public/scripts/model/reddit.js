'use strict';

var app = app || {};

(function(module) {
  let subredditJSON = [];
  let allSubreddits = [];
  let titlesJSON = [];
  let subredditTitles = [];
  let oneBigString = '';
  let searchMe;
  let testSubredditName = 'AskReddit';

  module.subredditJSON = subredditJSON;
  module.allSubreddits = allSubreddits;
  module.titlesJSON = titlesJSON;
  module.subredditTitles = subredditTitles;
  module.oneBigString = oneBigString;
  module.searchMe = searchMe;
  module.testSubredditName = testSubredditName;

  // function that takes 2 callbacks to avoid async issues that will grab all the top 25 subreddit names and push into the allSubreddit array
  let getSubreddits = function(callback, callback2) {
    $.get('/api/getSubreddits/')
      .then(results => {
        subredditJSON = results;
        subredditJSON.data.children.forEach(item => allSubreddits.push(item.data.display_name));
        callback && callback();
        callback2 && callback2();
      }, err => {
        console.error(err);
      });
  };

  // a function that gets all the post titles from a given subreddit
  let getSubredditTitles = function() {
    $.get(`/api/getTitles/${testSubredditName}`).then(results => {
      titlesJSON = results;
      titlesJSON.data.children.forEach(item => {
        subredditTitles.push(item.data.title);
      });
    }, err =>{
      // console.error(err);
    }).then(function(){
      oneBigString = subredditTitles.reduce(function(acc, cur){return acc.concat(cur) + ' ';});
      searchMe = JSON.stringify(oneBigString);
    });
  };

  //this function takes the subreddit names from the array and sends back to server side to eventually be added to SQL
  let fillTableWithSubredditNames = function() {
    let subredditNamesObject = {};
    allSubreddits.forEach(function(subRedditName) {
      let key = subRedditName;
      subredditNamesObject[key] = subRedditName;
    });
    $.post('/API/subredditNames',
      subredditNamesObject
    );
  };

  //adds all the above functions to the module so we can use app to access them
  module.getSubreddits = getSubreddits;
  module.getSubredditTitles = getSubredditTitles;
  module.fillTableWithSubredditNames = fillTableWithSubredditNames;

})(app);