'use strict';

var settings = {
  'async': true,
  'crossDomain': true,
  'url': 'https://api.textrazor.com/',
  'method': 'POST',
  'headers': {
    'x-textrazor-key': 'fb48909b03e33ac72c8c87bf368d84dd8ac41a3ba4032f4a7a2b4586',
    'content-type': 'application/x-www-form-urlencoded',
    'cache-control': 'no cache',
    'postman-token': '8b197ff1-8095-0c90-0a61-74feaf5fbc01',
    'access-control-allow-origin': '*'
  },
  'data': {
    'text': 'the lazy brown dog jumped over the brown pile of dung',
    'extractors': 'words'
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
