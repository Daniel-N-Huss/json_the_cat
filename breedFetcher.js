let request = require('request');
let list = require('./breedId.js');

let key = list.breeds.Toyger;
console.log(key);

request(`https://api.thecatapi.com/v1/breeds/search?q=${key}`, function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode: ', response && response.statusCode);
//  console.log('body: ', body);

  const data = JSON.parse(body);
  console.log(data[0].description);

});


