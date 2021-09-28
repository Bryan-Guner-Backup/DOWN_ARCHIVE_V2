// This module should only be used if you are using this
// server to authenticate AND the owner of json-server-auth
// has not yet made the necessary changes to add a 'role' to
// the JWT payload inside the accessToken
// As of right now, the only team that has made this change is
// Frontend team C, so this is mainly for them. However, if any
// of the other teams consolidate all their axios posts to the same
// URL (local), then this patch will be necessary for you guys too.

// Step 1. npm install
// Step 2. npm run patch
//    Make sure each user has a role and an authFields array, like so:
// {
//     "email": "a@a.com",
//     "password": "$2a$10$3Z83fo3Z/9ZbIUjq4upNo.Eeghwzga9KZiZ0/E4tpZLG95mamhnqy",
//     "role": "headmaster",
//     "username": "Amado"
//     "authFields": ["role", "username"],
//     "id": 20
// }

// The role is obvious, but the authFields array indicates which fields will be passed
// in the JWT payload. (by default the email and id (sub) will already be included)

// --------------------------------------------------------------------------------------
const fs = require('fs');
const { join } = require('path');

const jsonServerAuth = join(__dirname, 'node_modules', 'json-server-auth');
const jsonUsersFile = join(jsonServerAuth, 'dist', 'users.js');
const jsonRenamedFile = join(jsonServerAuth, 'dist', 'users_old.js');
const newUsersFile = join(__dirname, 'users.js');

const updateDB = () => {
	const db = JSON.parse(fs.readFileSync('./db.json'));
	const { users } = db;

	const newUsers = users.map((user) => {
		if (user.id >= 16) {
			user.role = 'headmaster';
			user.authFields = ['role'];
		}
		return user;
	});

	db.users = newUsers;

	fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
};

try {
	if (!fs.existsSync(jsonServerAuth) || !fs.existsSync(jsonUsersFile) || !fs.existsSync(newUsersFile))
		throw new Error(
			'Could not find the json-server-auth package. Please make sure you have run npm install before running this script.'
		);

	if (!fs.existsSync(jsonUsersFile))
		throw new Error(
			'Found the json-server-auth package, but could not find the users.js file inside the package. Please re-install the package.'
		);

	if (!fs.existsSync(newUsersFile))
		throw new Error('Found the json-server-auth package, but missing the patched users.js file.');

	console.log('Found the json-sever-auth module & the users.js file.');

	if (!fs.existsSync(jsonRenamedFile)) {
		console.log('Renaming the existing users.js file in the package to users_old.js (just in case)..');
		fs.renameSync(jsonUsersFile, jsonRenamedFile);
	}

	console.log('Copying over the patched users.js file into the package..');
	fs.copyFileSync(newUsersFile, jsonUsersFile);

	console.log(
		'Making sure that all of the recently created users in the database (id over 16) have the necessary fields...'
	);
	updateDB();

	console.log('Done. You should be able to run npm start now.');
} catch (error) {
	console.log(error);
}
