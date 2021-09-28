const router = require('express').Router();

const Workers = require('./workers-model.js');

router.get('/', (req, res) => {
    Workers.find()
        .then(workers => {
            res.status(200).json(workers);
        })
        .catch(err => {
            res.status(401).send(err);
        })
});

router.get('/role/:role', (req, res) => {
    const role = req.params.role;
    Workers.findByRole(role)
        .then(workers => {
            res.status(200).json(workers);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find worker' })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Workers.findById(id)
        .then(worker => {
            res.status(200).json(worker);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not find worker' })
        })
})

router.post('/', (req, res) => {
    const survey = req.body;
    Workers.add(survey)
        .then(worker => {
            res.status(201).json(worker);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'could not add worker' })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;
    if (id && changes) {
        Workers.update(id, changes)
            .then(worker => {
                res.status(201).json(worker);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: 'Could not update worker' });
            })
    } else {
        res.status(400).json({ message: 'Nothing was updated for the worker' });
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Workers.remove(id)
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'Worker successfully deleted' });
            } else {
                res.status(404).json({ message: 'Could not find worker' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not delete worker' })
        })
})

module.exports = router;