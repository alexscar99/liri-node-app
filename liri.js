require('dotenv').config();
var dotenv = require('dotenv');
var Twitter = require('twitter');
var request = require('request');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');

var command = process.argv[2];

var value = process.argv[3];

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var params = {
  q: 'alexskarr33',
  count: 20
};

if (command === 'my-tweets') {
  client.get('search/tweets', params, function(err, data, response) {
    if (err) throw err;

    for (i = 0; i < data.statuses.length; i++) {
      console.log('The tweet was ' + '"' + data.statuses[i].text + '".');
      console.log('It was created at ' + data.statuses[i].created_at + '.');
    }
  });
} else if (command === 'spotify-this-song') {
  spotify.get();
} else if (command === 'movie-this') {
  //
} else if (command === 'do-what-it-says') {
  //
}
