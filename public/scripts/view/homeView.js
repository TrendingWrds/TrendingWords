'use strict';

let subredditJSON = [];
let allSubreddits = [];

// $.get('/authorize/').then(console.log);
$.get('/authorize/').then(results => {
  subredditJSON = results;
  subredditJSON.data.children.forEach(item => allSubreddits.push(item.data.display_name));
}, err =>{
  console.error(err);
});
