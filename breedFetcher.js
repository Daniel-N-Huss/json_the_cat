let request = require('request');
let list = require('./breedId.js');

let requestedSearch = process.argv.slice(2);

let catSearch = requestedSearch.join(' ');

console.log(requestedSearch);
if (catSearch === '') {
  throw 'Uh oh, no cat specified in command line';
}

const breedNames = Object.keys(list.breeds);
if (breedNames.includes(catSearch) === false) {
  throw "Oh dear, I don't know that kind of cat";
}

let key = list.breeds[catSearch];


request(`https://api.thecatapi.com/v1/breeds/search?q=${key}`, function (error, response, body) {
  if (error) console.log('error:', error);
  if (response.statusCode !== 200) console.log('statusCode: ', response && response.statusCode);

  const data = JSON.parse(body);
  console.log(data[0].description);
});


