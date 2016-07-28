var orm 			= require('../config/orm.js');

var burger = {
	selectAll: function(callback){
		orm.selectAll('burgers', function(res){
			callback(res);
		});
	},

	insertOne: function(name, callback){
		orm.insertOne('burgers', name, function(res){
			callback(res);
		});
	},

	updateOne: function(){}
}

module.exports = burger;