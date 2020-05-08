const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (breedName === undefined) {
  throw 'uh oh, no cat breed name specified in the command line!';
}


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});