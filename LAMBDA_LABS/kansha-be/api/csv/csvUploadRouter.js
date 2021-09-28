const csv = require('csvtojson');
const router = require('express').Router();
const auth = require('../../middleware/authMiddleWare');
const multer = require('multer');
const user = require('../user/userModel');
const employee = require('../employee/employeeModel');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.use(auth.validateId);

router.post('/', upload.single('bulkupload'), async (req, res) => {
	// retrieve the org id from the currently logged-in user's org
	const currentOrgId = req.profile.org_id;
	try {
		// convert the csv into an array of JSON objects
		let jsonArray = await csv().fromString(req.file.buffer.toString());
		// create a counter
		let counter = 0;
		const userArray = [];
		// loop over the csv objects, skipping the first one because it's an example in the given csv file
		for (const newUser of jsonArray) {
			// if the object has all of the required fields
			if (
				newUser['First name'] &&
				newUser['Last name'] &&
				newUser['Job title'] &&
				newUser['Email']
			) {
				// add the user to the Users table
				const [newUserId] = await user.addNewUser({
					first_name: newUser['First name'],
					last_name: newUser['Last name'],
					email: newUser['Email'],
					ext_id: newUser['Internal ID (optional)'],
					department: 'X',
				});

				// add the user to the Employees table

				await employee.addEmployee({
					org_id: currentOrgId,
					user_id: newUserId,
					job_title: newUser['Job title'],
					user_type: 'Standard',
				});

				userArray.push({
					first_name: newUser['First name'],
					last_name: newUser['Last name'],
					email: newUser['Email'],
					job_title: newUser['Job title'],
					ext_id: newUser['Internal ID (optional)'],
				});

				// increase the counter so we know how many employees were added
				counter++;
			}
		}

		if (counter === 0) {
			res.status(400).json({
				error:
					"Each employee needs a 'First Name', 'Last name', 'Job title' and 'Email'",
			});
		} else {
			res.status(200).json({
				message: `Successfully uploaded ${counter} users`,
				userArray,
			});
		}
	} catch (error) {
		console.error(error, 'error');
		return res.status(500).json(error);
	}
});

module.exports = router;
