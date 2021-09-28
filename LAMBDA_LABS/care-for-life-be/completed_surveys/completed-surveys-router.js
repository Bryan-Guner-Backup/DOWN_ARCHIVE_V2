const router = require('express').Router();

const CS = require('./completed-surveys-model.js');

router.get('/', (req, res) => {
    CS.find()
        .then(surveys => {
            res.status(200).json(surveys);
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    CS.findById(id)
        .then(survey => {
            res.status(200).json(survey);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find survey' })
        })
})

// *** 
router.get('/:id/questions', (req, res) => {
    const id = req.params.id;
    CS.findSurveyQuestions(id)
        .then(surveyQuestions => {
            res.status(200).json(surveyQuestions);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find survey questions' })
        })
})

router.post('/', (req, res) => {
    const survey = req.body;
    CS.add(survey)
        .then(survey => {
            res.status(200).json(survey);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not add survey' })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;
    if (id && changes) {
        CS.update(id, changes)
            .then(survey => {
                res.status(201).json(survey);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Could not update survey' });
            })
    } else {
        res.status(400).json({ message: 'Nothing was updated for the survey' });
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    CS.remove(id)
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'Survey successfully deleted' });
            } else {
                res.status(404).json({ message: 'Could not find survey' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not delete survey' })
        })
})

module.exports = router;