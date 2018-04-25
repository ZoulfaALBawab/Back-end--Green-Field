	

	var express = require('express');
	var router = exprss.Router();
	var User = require('../model-db/user');
	var User = require('../model-db/items');
	var UsersController = require('../controller/user');
    var ItemsController = require('../controller/items');

/////////////////////////////////////////////////////////////////////////
	
	router.route('/')
	//users controller dot in your computer ..
		.get(UsersController.sellectAll);
		.post(UsersController.newUser);
		 
	router.route('/:userId') //gana be fixed with the front-end team 
		.get(UsersController.getUser);
		.put(UsersController.updateUser);

	router.route('/:userId/items') //gana be fixed with the front-end team
		.get(UsersController.getUserItems);
		.post(UsersController.newUserItem);
        
        // check the connection !! with front-end 
		.get(ItemsController.Search);



/////////////////////////////////////////////////////////////////////////
  module.exports = router; 

 