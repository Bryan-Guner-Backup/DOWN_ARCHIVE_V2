const router = require('express').Router();

const SurveyRoles = require('./survey-roles-model.js');

router.get('/', (req, res) => {
    SurveyRoles.find()
        .then(roles => {
            res.status(200).json(roles);
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    SurveyRoles.findById(id)
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find survey role' })
        })
})

router.get('/surveyId/:id', (req, res) => {
    const id = req.params.id;
    SurveyRoles.findBySurveyId(id)
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find survey role' })
        })
})

router.get('/roleId/:id', (req, res) => {
    const id = req.params.id;
    SurveyRoles.findByRoleId(id)
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find survey role' })
        })
})

router.post('/', (req, res) => {
    const role = req.body;
    SurveyRoles.add(role)
        .then(role => {
            res.status(200).json(role);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not add survey role' })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;
    if (id && changes) {
        SurveyRoles.update(id, changes)
            .then(role => {
                res.status(201).json(role);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Could not update survey role' });
            })
    } else {
        res.status(400).json({ message: 'Nothing was update for the survey role' });
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    SurveyRoles.remove(id)
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'User successfully deleted' });
            } else {
                res.status(404).json({ message: 'Could not find role' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not delete role' })
        })
})

module.exports = router;