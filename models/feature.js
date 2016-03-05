var mongoose = require('mongoose');

var FeatureSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	client: {
		type: String
	},
	priority: {
		type: String
	},
	date: {
		type: Date
	},
	url: {
		type: String
	},
	product: {
		type: String,
	}

});

module.exports = mongoose.model('Feature', FeatureSchema);