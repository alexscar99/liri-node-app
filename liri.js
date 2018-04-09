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
  if (value == null) {
    value = 'The Sign';
    spotify.search({ type: 'track', query: value }, function(err, data) {
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
    spotify.search({ type: 'track', query: value }, function(err, data) {
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
  if (value == null) {
    var movieURL = 'http://www.omdbapi.com/?t=Mr+Nobody&apikey=trilogy';
    request(movieURL, function(error, response, body) {
      console.log("The movie's title is " + JSON.parse(body).Title + '.');
      console.log('It was released in ' + JSON.parse(body).Year + '.');
      console.log(
        'IMDB gave the movie a rating of ' +
          JSON.parse(body).imdbRating +
          ' out of 10.'
      );
      console.log(
        JSON.parse(body).Ratings[1].Source +
          ' gave the movie a rating of ' +
          JSON.parse(body).Ratings[1].Value +
          '.'
      );
      console.log(
        JSON.parse(body).Title +
          ' was produced in ' +
          JSON.parse(body).Country +
          '.'
      );
      console.log(
        JSON.parse(body).Title +
          ' is available in the following languages: ' +
          JSON.parse(body).Language +
          '.'
      );
      console.log(
        'A brief synopsis of ' +
          JSON.parse(body).Title +
          ': ' +
          JSON.parse(body).Plot
      );
      console.log(
        JSON.parse(body).Title +
          ' features ' +
          JSON.parse(body).Actors +
          ' in leading roles.'
      );
    });
  } else {
    var movieURL = 'http://www.omdbapi.com/?t=' + value + '&apikey=trilogy';
    request(movieURL, function(error, response, body) {
      console.log("The movie's title is " + JSON.parse(body).Title + '.');
      console.log('It was released in ' + JSON.parse(body).Year + '.');
      console.log(
        'IMDB gave the movie a rating of ' +
          JSON.parse(body).imdbRating +
          ' out of 10.'
      );
      console.log(
        JSON.parse(body).Ratings[1].Source +
          ' gave the movie a rating of ' +
          JSON.parse(body).Ratings[1].Value +
          '.'
      );
      console.log(
        JSON.parse(body).Title +
          ' was produced in ' +
          JSON.parse(body).Country +
          '.'
      );
      console.log(
        JSON.parse(body).Title +
          ' is available in the following languages: ' +
          JSON.parse(body).Language +
          '.'
      );
      console.log(
        'A brief synopsis of ' +
          JSON.parse(body).Title +
          ': ' +
          JSON.parse(body).Plot
      );
      console.log(
        JSON.parse(body).Title +
          ' features ' +
          JSON.parse(body).Actors +
          ' in leading roles.'
      );
    });
  }
} else if (command === 'do-what-it-says') {
  //
}
