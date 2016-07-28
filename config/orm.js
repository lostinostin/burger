var connection 			= require('../config/connection.js');

// This object is a template for the model
var orm = {

	selectAll: function(table, callback){
		var select = 'SELECT * FROM ' + table;

		connection.query(select, function(err, result) {

            callback(result);

        });
	},
	insertOne: function(table, name, callback){
		var insert = 'INSERT INTO ' + table + ' (burger_name) VALUES ?;'
		connection.query(insert, [name] function(err, res){
			console.log(result);
		})
	},

	// This method updates the devoured value from false to true, and sets the timestamp
	updateOne: function(){}

};
module.exports = orm;