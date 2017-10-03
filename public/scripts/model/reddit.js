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

  let getSubredditTitles = function() {
    console.log('getSubredditTitles is running');
    $.get(`/api/getTitles/${testSubredditName}`).then(results => {
      titlesJSON = results;
      console.log(titlesJSON);
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

  let fillTableWithSubredditNames = function() {
    let subredditNamesObject = {};
    allSubreddits.forEach(function(subRedditName) {
      let key = subRedditName;
      subredditNamesObject[key] = subRedditName;
      console.log(subredditNamesObject);
    });
    $.post('/API/subredditNames',
      subredditNamesObject
    );
  };

  module.getSubreddits = getSubreddits;
  module.getSubredditTitles = getSubredditTitles;
  module.fillTableWithSubredditNames = fillTableWithSubredditNames;

})(app);
