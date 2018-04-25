 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 var UserSchema = new mongoose.Schema({

 	
 	fullname: {
 		type: String,
 		unique: true,
 		required: true,
 	},
 	email: {
 		type: String,
 		unique: true,
 		required: true,
 		trim: true
 	},
 	password: {
 		unique: true,
 		required: true
 	},
 	passwordCnf: {
 		unique: true,
 		required: true
 	}
 	 
 });


// no need for it now !!
// //hashing password :: 
// //.pre() ,, bcs. to make the hashing before saving the user in the database
//check the next and this (why we don't call the key directly ?!) !! 

// UserSchema.pre('save', function (next) {
	
// 	// 10 relaited to !! -- Related** -Nader
// 	var user = this;
// 	//for hasging ::
// 	bcrypt.hash(user.password, 10, function(err, hash){
// 		if(err){
// 			return next(err);
// 		}
// 		user.password=hash;
// 		next();
// 	})

// });
//then we need to authinticate the name,pass,email =>> NDER !!   




var User = mongoose.model('user', UserSchema);
module.exports = User;

//Don't forgit to connect to connect it with the other files :: 
//BY:: var User = require('../model-db/user') 