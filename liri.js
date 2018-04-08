require('dotenv').config();
var dotenv = require('dotenv');
var Twitter = require('twitter');
var request = require('request');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');

var command = process.argv[2];

var track = process.argv[3];

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var params = {
  q: 'alexskarr33',
  count: 20
};

// var track = { type: 'track', query: value };

if (command === 'my-tweets') {
  client.get('search/tweets', params, function(err, data, response) {
    if (err) throw err;

    for (i = 0; i < data.statuses.length; i++) {
      console.log('The tweet was ' + '"' + data.statuses[i].text + '".');
      console.log('It was created at ' + data.statuses[i].created_at + '.');
    }
  });
} else if (command === 'spotify-this-song') {
  if (track == null) {
    track = 'The Sign';
    spotify.search({ type: 'track', query: track }, function(err, data) {
      if (err) throw err;

      console.log(
        'The artist is ' + data.tracks.items[5].artists[0].name + '.'
      );

      console.log('The song is ' + '"' + data.tracks.items[5].name + '".');

      console.log(
        'Link to the song: ' + data.tracks.items[5].external_urls.spotify
      );

      console.log(
        'The album is ' + '"' + data.tracks.items[5].album.name + '".'
      );
    });
  } else {
    spotify.search({ type: 'track', query: track }, function(err, data) {
      if (err) throw err;

      console.log(
        'The artist is ' + data.tracks.items[0].artists[0].name + '.'
      );

      console.log('The song is ' + '"' + data.tracks.items[0].name + '".');

      console.log(
        'Link to the song: ' + data.tracks.items[0].external_urls.spotify
      );

      console.log(
        'The album is ' + '"' + data.tracks.items[0].album.name + '".'
      );
    });
  }
} else if (command === 'movie-this') {
  //
} else if (command === 'do-what-it-says') {
  //
}
