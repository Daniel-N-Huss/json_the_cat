let request = require('request');
let breeds = require('./breedId.js');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode: ', response && response.statusCode);
//  console.log('body: ', body);

  const data = JSON.parse(body);
  console.log(data[0].description);

});


