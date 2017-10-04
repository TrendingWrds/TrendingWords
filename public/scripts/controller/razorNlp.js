'use strict';
var app = app || {};

(function(module) {

  let nlpResults = '';

  let sendSubredditTitles = function () {
    console.log('call within nlp  oneBigString is ' + app.oneBigString);
    $.post('/api/postRazor', {
      text: app.oneBigString,
      extractors: 'words'
    }).fail(console.error)
    // .then(response => app.nlpResults = response
    .then(function(response){
      app.nlpResults = response;
      let obj = JSON.parse(app.nlpResults);
      let words = obj.response.sentences;
      let partOfSpeech = ['FW', 'JJ', 'NN', 'NNP', 'NNS', 'NNPS', 'VB'];
      app.words = words;
      let filteredWords = words.filter(function(word) {
        return partOfSpeech.includes(word.partOfSpeech);
      }
    );
      app.filteredWords = filteredWords;
    });

  };




  module.sendSubredditTitles = sendSubredditTitles;
  module.nlpResults = nlpResults;

})(app);
