var express = require('express')
var app = express()
app.set('port', (process.env.PORT || 5000));
var fetch = require('node-fetch');
 
// if you are on node v0.10, set a Promise library first, eg. 
// fetch.Promise = require('bluebird'); 
 
// plain text or html 
 

app.get('/', function (req, res) {
	var city = req.query.city
	fetch('http://api.apixu.com/v1/current.json?key='+ process.env.WEATHER_API +'&q=' + city)
	.then(function(res) {
		return res.json();
	}).then(function(body) {
		res.send(body)
	});
	
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});