var connection = require('../config/connection.js');
var tableName = burgers;

var orm = {
	selectAll: function(callback){
		var select = 'SELECT * FROM ' + tableName;

		connection.query(select, function(err, result) {

            callback(result);

        });
	},
	insertOne: function(name, callback){
		var insert = 'INSERT INTO ' + tableName + ' (burger_name) VALUES ?;'
		connection.query(insert, [name]function(err, res){
			console.log(result);
		})
	},
	updateOne: function(){}

};
module.exports = orm;