var settings = require('../settings');

var mongo = require('mongodb');

var port = 27017;

module.exports = new mongo.Db (
	settings.db, 
	new mongo.Server (
		settings.host,
		port,
		{}
	),{safe:true}
);