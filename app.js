
var weatherSearch = require('./weatherapi.js');
var city = process.argv.slice(2);

city.forEach( function(location) {

  weatherSearch.searchByCity(location);

});
