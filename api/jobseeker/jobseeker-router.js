const express = require('express');
const router = express.Router();

const Jobseekers = require('./jobseeker-model.js');

router.get('/', (req, res) => {
    Jobseekers.get().then(seekers => {
            res.status(200).json(seekers)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.post('/', (req, res) => {
    Jobseekers.create(req.body).then(seeker => {
        res.status(201).json(seeker)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router;