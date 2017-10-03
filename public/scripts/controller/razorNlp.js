'use strict';

$.post('/api/postRazor', {

  text: 'This is a potato',
  extractors: 'words'
  // 'partOfSpeech': 'NN'
// }).then(function (res) {
//   console.log(res);

}).fail(console.error);


// var settings = {
//   'async': true,
//   'crossDomain': true,
//   'url': 'https://api.textrazor.com/',
//   'method': 'POST',
//   'headers': {
//     'x-textrazor-key': 'fb48909b03e33ac72c8c87bf368d84dd8ac41a3ba4032f4a7a2b4586',
//     'content-type': 'application/x-www-form-urlencoded',
//     'cache-control': 'no cache',
//     'postman-token': '8b197ff1-8095-0c90-0a61-74feaf5fbc01',
//     'access-control-allow-origin': '*'
//   },
//   'data': {
//     'extractors': 'words',
//     'text': 'the lazy brown dog jumped over the brown pile of dung'
//   }
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
/////////////////////////////////////
// var settings = {
//   // 'async': true,
//   'crossDomain': true,
//   'url': 'https://api.textrazor.com/',
//   'method': 'POST',
//   'headers': {
//     'x-textrazor-key': 'fb48909b03e33ac72c8c87bf368d84dd8ac41a3ba4032f4a7a2b4586',
//     'content-type': 'application/x-www-form-urlencoded',
//     'cache-control': 'no-cache',
//     // 'postman-token': 'c5c88cef-13f7-a4fd-1da2-0fe994f4d448'
//   },
//   'data': {
//     'text': 'the quick brown fox jumped over the lazy dog',
//     'extractors': 'words'
//   }
// };
console.log('Hello!');

// $.ajax(postRazor).then(function (response) {
//   console.log(response);
// });
