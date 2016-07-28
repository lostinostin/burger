var connection 			= require('../config/connection.js');

// function objToSql(ob){
//   //column1=value, column2=value2,...
//   var arr = [];

//   for (var key in ob) {
//     arr.push(key + '=' + ob[key]);
//   }

//   return arr.toString();
// }

// This object is a template for the model
var orm = {

	selectAll: function(table, callback){
		var select = 'SELECT * FROM ' + table;

		connection.query(select, function(err, res) {

            callback(res);

        });
	},

	insertOne: function(table, name, callback){
		var insert = 'INSERT INTO ' + table + ' (burger_name) VALUES ?;'

		connection.query(insert, [name], function(err, res){
			if (err) throw err;
			callback(res);
		})
	},

	// This method updates the devoured value from false to true, and sets the timestamp
	updateOne: function(table, name, callback){
		var update = 'UPDATE ' + table + ' SET devoured = true, date = current_timestamp WHERE ?;'
		connection.query(update, [name], function(err, res){
			if (err) throw err;
			callback(res);
		})
	});

};
module.exports = orm;