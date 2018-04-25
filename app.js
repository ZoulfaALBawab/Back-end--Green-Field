    var express = require('express');
	var bodyParser = require('body-parser');
	var mongoose = require('mongoose');
	var session = require('express-session');
	var MongoStore = require('connect-mongo')(session);
	var morgan = require('morgan');
	var app = express();

	//morgan is the library we use for the middleware 
	//for more details :: 
	// 1/ https://github.com/expressjs/morgan ,, 
	// 2/ https://www.youtube.com/watch?v=IdsdQuC13P0
	// 3/ https://scotch.io/@PratyushB/local-storage-vs-session-storage-vs-cookie

	//hi hi hi hi 
	//For more understading for the routes and controller :
	// Check : https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
	mongoose.Promise = global.Promise;

	//include the mongoose in the proj. and then open the connection ..
	mongoose.connect('mongodb://localhost/user');
	mongoose.connect('mongodb://localhost/items');
	mongoose.connect('mongodb://localhost/additem');
	mongoose.connect('mongodb://localhost/searchList');
	var db = mongoose.connection;

	//to get notified if we connect successfully or not ..
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	});

	app.use(express.static(__dirname + '/')); // should be the home page!!
	app.use(bodyParser.json());

	//Middlewares ::
	//handle the tansaction between the server and the client 
	//dev : development enviroment
	app.use(morgan('dev'));
	app.use(bodyParser.json());

	//create a route that we can access in the browser. Browsers only serve pages using a GET request, 
	//so we need to create a route using Express' get method like this: 
	// it is dummy one 
	app.get ('/' , function (req, res, next){
		res.status(200).json({
			message: 'Yeees ,, it is working :D!!'
		})
	});
	//Routes:: should be checked dep. on the files !!! => check the front-end !!
	app.use('/users', users);

	//Catch 404 Errors and forward them to error handler ::
	app.use(function(req, res, next){
		var err = new Error ('Error !! ');
		err.status = 404;
		next(err);

	});

 	//Error handler function @ Es6::
	// app.use(function(err, req, res, next) {
	// 	const err = app.get('env') === 'development' ? err : {};
	// 	cont status = err.status || 500;
	// 	console.error(err);
	// });
	
	//Error handler function ::
	app.use(function(err, req, res, next){
		var error = app.get('env');
		if (error === 'development'){
			return error
		}
		return {}

		var status = err.status;
		status = err.status || 500;

		//Respond to client 

		res.status(status).json({
			error : {
				message: error.message
			}
		});
		// Respond for testing 

		console.log(err);	
	});

	// session :: 
	// authinticate transzction between Server and client ..  
	app.use(session({
		secret: 'any string of text', 
	 resave: true, //even if nothing changed in the files ,, gana save it again .. 
	 saveUninitialized: false // for the database 
	}));



	// Run the server :: 
	app.listen(3000, function () {
		console.log('Express app listening on port 3000');
	});