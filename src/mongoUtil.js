'use strict';

import {MongoClient} from 'mongodb';

var _db;

module.exports = {
	connectToServer: (cb) => {
    const DB_URI = 'mongodb://localhost:27017/fitfreak';
		MongoClient.connect(DB_URI, (err, db) => {
			_db = db;
			return cb(err);
		});
	},
	getDb: () => {
		return _db;
	}
};
