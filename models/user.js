var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String
	}

});

module.exports = mongoose.model('User', UserSchema);