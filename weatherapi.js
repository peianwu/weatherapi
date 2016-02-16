var http = require('http');

// define variables
var apiKey = '49daa813c4bd51586e956a9dcf4dfb63';


//define functionality
function kelvinToCelsius(kelvin){
  return kelvin - 273;
}

// link to weatherapi

function searchByCity (cityName) {

  var request = http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + apiKey, function(res) {

    var body = '';

    res.on('data', function(chunk) {
      body += chunk;
    });
    
    res.on('end', function(){

      body = JSON.parse(body);

      var country = body.sys.country;
      var city = body.name;
      var temp = kelvinToCelsius(body.main.temp);
      console.log(city + ', ' + country + ' has a temperature of ' + Math.round(temp * 10)/10 + ' Celsius.');
    });

  });


}

module.exports.searchByCity = searchByCity;

// fetch data
// parse data
// print data

// closing