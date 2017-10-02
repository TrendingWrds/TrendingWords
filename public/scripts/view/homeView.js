'use strict';

$.ajax({
  url: 'https://www.reddit.com/api/v1/authorize',
  data: {client_id: 'tFVXlZuIdNErmg',
    response_type: 'code',
    state: 'erhwn',
    redirect_uri: 'http://localhost:3000/authorize',
    duration: 'temporary',
    scope: 'history read',
    success: function(response) {console.log(response)};
  }
})
