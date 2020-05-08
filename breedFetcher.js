let request = require('request');

const fetchBreedDescription = function(breedName, dataReturner) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      dataReturner(error, null);
    }
    
    if (body === '[]') {
      throw "Sorry about that, I couldn't find that cat breed";
    }

    const retreivedData = JSON.parse(body);
    const descriptionData = retreivedData[0].description;

    if (!error) {
      dataReturner(null, descriptionData);
    }
  });
};

module.exports = { fetchBreedDescription };
