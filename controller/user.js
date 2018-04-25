
let User = require('../model-db/user');
let User = require('../model-db/items');
let promise = require('bluebird');
		//by methods ::

	//defiuned an empty obj. ,, which will fetch all the users 

	//insted of using the export for each function,, gana use export obj ,, and make our functions instances ..

	module.exports = {
		
	// Now using promises :: 
	//in the obj. of find we will defide whatever we need to call ..
		// here we will ::
	//when find 'for instance' finish ,, then i promise to excute the function inside (then) ..

	sellectAll: (req, res, next) => {
		User.find ({},(err, users) =>{
			.then (users => {
				
				res.status(200).json(users);
			})
			.catch(err => {
				next(err);
			})
		})
	},

	sellectPrice: (req, res, next) => {

		const charge === undefined ? {
			.then ({free})
		}
		.then({charge})
	},

	//before starting the Search fun. ,, we need to merge the items and add items .. 
	Search: (req, res, next) =>{
		Items.find({},(err, items)=> {
			.then(users => {
				res.status(200).json(items);
			})
			.catch(err => {
				next(err);
			})
		})
	},

	// the value we get from the customer ,, to be stored in the req. obj.

	// for tetsting : console.log 

		//promises::

	newUser: (req, res, next) => {
			console.log('req.body contents' , req.body);
			const newUser = new User(req.body);
			console.log ('newUser', newUser);
			newUser.save()
			.then (user => {
	// 201 for something got created successfully 
	res.status(201).json(user);
				})
			.catch(err => {
				next(err);
		    })

		},
	getUser: (req, res, next) => {
			const {userId}=req.params
			console.log('req.params',req.params.userId);
			User.findbyId({userID})
			.then (userId => res.status(200).json(UserId))
		},

	updateUser: (req, res, next) => {
		//why i have to defined the userId between {} !! 
		const {userId} = req.params;
		const newUser = req.body;
		User.findbyIdandreplace ({})
		.then (userId => res.status(200).json({success: true }))

	},
	getUserItems: (req, res, next) => {

		const {userId} = req.params;
		User.findbyId({userID})
		.then (userId => res.status(200).json(UserId))
		console.log('user',user); 
	},

	newUserItem: (req, res, next) => {
		
		// creat a new item 
		const newItem = new Item (req.body);
		console.log('newItem', newItem); 
		newItem.save()
		.then(item => {
			res.status(201).json(item);
		})
		.catch(err => {
			next(err);
		})
		
		// Get user 
		// Assign user as a item's lender 
		// Save the item 
		// Add item to the user's leanding array 'items'
		//Save the user 

	},



}

	//i still need to check and test the postman and Robomongo 





		/*
		 

		we can interact with mongoiose in three diff. ways : 
		1/ callback 
		2/ promises
		*/

		//module.exports = selectAll;
