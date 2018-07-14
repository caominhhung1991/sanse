const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;

const urlDB = "mongodb://localhost:27017/dashboard";

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

// get all widget - widgets
router.get('/widgets', (req, res) => {
	console.log('get all widget - widgets')
	// let collection = req.params.col;
	connection(db => {
		db.collection('widgets')
			.find()
			.toArray()
			.then(widgets => {
				res.json(widgets);
			})
			.catch(err => {
				sendError(err, res)
			})
	})
})

module.exports = router;