let request = require('request');
let list = require('./breedId.js');


// const breedNames = Object.keys(list.breeds);
// if (breedNames.includes(catSearch) === false) {
  // throw "Oh dear, I don't know that kind of cat, but here's a list of what I do know: " , breedNames;
// }

// let key = list.breeds[catSearch];



const fetchBreedDescription = function(breedName, dataReturner) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    const retreivedData = JSON.parse(body);
    const descriptionData = retreivedData[0].description;
    dataReturner(error, descriptionData);
  });

};

module.exports = { fetchBreedDescription };
