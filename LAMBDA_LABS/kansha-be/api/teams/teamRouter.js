const Team = require('./teamModel');
const router = require('express').Router();
const auth = require('../../middleware/authMiddleWare');
const requiredFields = require('../../middleware/requiredField');

router.use(auth.validateId);

// get all teams for an organization
router.get('/', async (req, res) => {
	const { org_id } = req.profile;
	try {
		const teams = await Team.getAllTeamsForAnOrg(org_id);
		res.status(200).json(teams);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Teams could not be retrieved from the database',
		});
	}
});

//get a team by id with members
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const team = await Team.getTeamByIdWithMembers(id, req.query);
		res.status(200).json(team);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Team could not be retrieved from the database',
		});
	}
});

// Add new team with team members
router.post('/', requiredFields('name'), async (req, res) => {
	const { name, newMembersArray } = req.body;
	const { org_id } = req.profile;
	try {
		const newTeam = await Team.addTeamToOrg({ name, org_id });
		const count = await Team.addTeamMembersToTeam(
			newMembersArray,
			newTeam.id,
		);
		res.status(201).json({
			id: newTeam.id,
			message: `Successfully added ${count} members to team  ${newTeam.name}! `,
		});
	} catch (error) {
		console.error('error creating team', error);
		res.status(500).json({ error: 'Error adding team' });
	}
});

// Add team member to team
router.post('/:id', requiredFields('team_role'), async (req, res) => {
	const { id: team_id } = req.params;
	const { team_role, user_id } = req.body;
	try {
		const newTeamMember = await Team.addTeamMemberToTeam({
			team_id,
			team_role,
			user_id,
		});
		return res.status(201).json(newTeamMember);
	} catch (error) {
		console.error('error creating member', error);
		res.status(500).json({ error: 'Error adding member' });
	}
});

//delete a team
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		await Team.deleteTeam(id);
		res.sendStatus(204);
	} catch (error) {
		console.error('error deleting team', error);
		res.status(500).json({
			error: 'Error Deleting team',
		});
	}
});

//update team
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	try {
		const team = await Team.editTeam(id, { name });
		res.status(200).json(team);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to update Team',
		});
	}
});

//get a team-member by id
router.get('/members/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const member = await Team.getTeamMemberById(id);
		res.status(200).json(member);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Member could not be retrieved from the database',
		});
	}
});

//delete a team-member
router.delete('/members/:id', async (req, res) => {
	const { id } = req.params;
	try {
		await Team.deleteTeamMember(id);
		res.sendStatus(204);
	} catch (error) {
		console.error('error deleting team member', error);
		res.status(500).json({
			error: 'Error Deleting team member',
		});
	}
});

//update team-member
router.put('/members/:id', async (req, res) => {
	const { id } = req.params;
	const { team_role, active } = req.body;
	try {
		const member = await Team.editTeamMember(id, { team_role, active });
		res.status(200).json(member);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Failed to update Team Member',
		});
	}
});

module.exports = router;
