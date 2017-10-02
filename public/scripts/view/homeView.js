'use strict';

let subredditJSON = [];
let allSubreddits = [];
let titlesJSON = [];
let subredditTitles = [];

// $.get('/authorize/').then(console.log);
$.get('/api/getSubreddits/').then(results => {
  subredditJSON = results;
  subredditJSON.data.children.forEach(item => allSubreddits.push(item.data.display_name));
}, err =>{
  console.error(err);
}).then(function(){
  $.get(`/api/getTitles/${allSubreddits[0]}`).then(results => {
    titlesJSON = results;
    titlesJSON.data.children.forEach(item => {
      subredditTitles.push(item.data.title);
    });
  }, err =>{
    // console.error(err);
  });
});

// $.get(`/api/getTitles/${allSubreddits[0]}`).then(results => {
//   titlesJSON = results;
//
// }, err =>{
//   // console.error(err);
// });

//
// $.get('/authorize/').then(results => {
//   subredditJSON = results;
//   subredditJSON.data.children.forEach(item => allSubreddits.push(item.data.display_name));
// }, err =>{
//   console.error(err);
// });
