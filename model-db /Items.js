	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var items = new mongoose.Schema({
		itemname: {
			type: String,
			required: true
		},
		owner:{
			type: Schema.Types.ObjectId,
			ref: 'user'
			//OR: Schema.fullname !! 
		}
		itemDiscription: {
			type: String,

		},
	 	//Need functionality frokm the routs !!  
	 	priceOption: {
	 		free: {
	 			type: String
	 		},
	 		charge: {
	 			type: String
	 		}
	 	},
	 	address: {
	 		type: String, 
	 		required: true
	 	},
	 	phoneNumber: {
	 		type: String,
	 		required: true
	 	},
	 	pictures: [{
	 		type: String,
	 		required: true
	 	}]
	 	





	 });

	var Items = mongoose.model('additem', additemSchema);
	module.exports = Items;















