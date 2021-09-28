const db = require('../../data/dbConfig');

module.exports = {
	findAllEmployees,
	findEmployeeById,
	getEmployeesByOrg,
	addEmployee,
	deleteEmployee,
	editEmployee,
};

// find all employees
function findAllEmployees() {
	return db('Employees')
		.join('Users', 'Users.id', 'Employees.user_id')
		.join('Organizations', 'Organizations.id', 'Employees.org_id')
		.select(
			'Users.id as user_id',
			'first_name',
			'last_name',
			'email',
			'profile_picture',
			'job_title',
			'user_type',
			'department',
			'Organizations.id as org_id',
			'Employees.id',
			'Organizations.name as org_name',
		);
}
// find one employee
function findEmployeeById(id) {
	return findAllEmployees()
		.where({ 'Employees.id': id })
		.first();
}

// add an employee
async function addEmployee(employee) {
	const [id] = await db('Employees').insert(employee, 'id');

	return findEmployeeById(id);
}

// delete an employee
function deleteEmployee(user_id, org_id) {
	return db('Employees')
		.where({ user_id, org_id })
		.del();
}

// edit an employee
function editEmployee(id, changes) {
	return db('Employees')
		.where({ id })
		.update(changes)
		.then(count => (count > 0 ? findEmployeeById(id) : null));
}

// Get all employees by org id
async function getEmployeesByOrg(org_id, query = {}) {
	const {
		page = 1,
		limit = 10,
		sortby = 'id',
		sortdir = 'asc',
		search = '',
	} = query;
	const offset = limit * (page - 1);
	const employees = await getAllEmployeesByOrg(org_id)
		.andWhere(builder => {
			builder
				.where('first_name', 'ilike', `%${search}%`)
				.orWhere('last_name', 'ilike', `%${search}%`);
		})
		.orderBy(sortby, sortdir)
		.limit(limit)
		.offset(offset);

	const count = await countEmployees(org_id);

	return {
		count,
		employees,
	};
}

async function countEmployees(org_id) {
	const { count } = await db('Employees')
		.where({ org_id })
		.count()
		.first();
	return Number(count);
}

function getAllEmployeesByOrg(org_id) {
	return db('Employees')
		.join('Users', 'Users.id', 'Employees.user_id')
		.join('Organizations', 'Organizations.id', 'Employees.org_id')
		.select(
			'Users.id',
			'first_name',
			'last_name',
			'profile_picture',
			'job_title',
			'user_type',
			'department',
			'Organizations.name as org_name',
		)
		.where({ org_id });
}
