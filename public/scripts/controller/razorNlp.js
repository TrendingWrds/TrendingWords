'use strict';

$.post('/api/postRazor', {

  text: 'This is a potato',
  extractors: 'words'
  // 'partOfSpeech': 'NN'
// }).then(function (res) {
//   console.log(res);

}).fail(console.error);

