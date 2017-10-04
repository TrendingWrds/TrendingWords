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
      let sentenceTotals = [];
      let articleTitles = obj.response.sentences;
      articleTitles.forEach(function(title){
        sentenceTotals = sentenceTotals.concat(title.words);
      });
      app.sentenceTotals = sentenceTotals;
      let partOfSpeech = ['FW', 'JJ', 'NN', 'NNP', 'NNS', 'NNPS', 'VB'];
      let filteredWords = sentenceTotals.filter(function(word) {
        return partOfSpeech.includes(word.partOfSpeech);
      }
    );
      app.filteredWords = filteredWords;
      let wordTokens = filteredWords.map(function(word) {
        return word.token;
      });
      let finalString = '';
      app.wordTokens = wordTokens;
      wordTokens.forEach(function(word) {
        finalString += (word + ' ');
      });
      app.finalString = finalString;
      $.post('/api/postWordCloud', {
        f_type:'png',
        width:800,
        height:500,
        s_max:'7',
        s_min:'1',
        f_min:1,
        r_color:'TRUE',
        r_order:'TRUE',
        s_fit:'FALSE',
        fixed_asp:'TRUE',
        rotate:'TRUE',
        textblock: app.finalString
      }
      ).fail(console.error);
    });

  };




  module.sendSubredditTitles = sendSubredditTitles;
  module.nlpResults = nlpResults;

})(app);
