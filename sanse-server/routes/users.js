const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;


const urlDB = "mongodb://localhost:27017/sanse";

// Connect
const connection = (closure) => {
	return MongoClient.connect(urlDB, (err, db) => {
		if (err) return console.log(err);
		closure(db);
	})
};

// Error handling
const sendError = (err, res) => {
	response.status = 501;
	response.message = typeof err === 'object' ? err.message : err;
	res.status(501).json(response);
};

// Response handling
let response = {
	status: 200, data: [], message: null
}

// get all user - users
router.get('/', (req, res) => {
	console.log('get all user - users')
	// let collection = req.params.col;
	connection(db => {
		db.collection('users')
			.find()
			.toArray()
			.then(users => {
				res.json(users);
			})
			.catch(err => {
				sendError(err, res)
			})
	})
})

// create a user
router.post('/users', (req, res) => {
  
	connection(db => {
		db.collection('users')
			.save(user, (err, user) => {
				if (err) {
					res.send(err)
				}
				res.json(user);
			})
	});
});

                                                   