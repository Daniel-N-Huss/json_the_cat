let request = require('request');

// request('https://api.thecatapi.com/v1/breeds/search?q=sib', function (error, response, body) {
  // console.log('error:', error);
  // console.log('statusCode: ', response && response.statusCode);
// //  console.log('body: ', body);

  // const data = JSON.parse(body);
  // console.log(data[0].description);

// });

// console.log(typeof body);



request('https://api.thecatapi.com/v1/breeds', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode: ', response && response.statusCode);
  //console.log('body: ', body);

  const data = JSON.parse(body);
  data.forEach(cat => {
    console.log(`name: ${cat.name}  ID: ${cat.id}`);
  });

});

console.log(typeof body);
