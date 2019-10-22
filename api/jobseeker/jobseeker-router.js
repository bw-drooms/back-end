const express = require('express');
const router = express.Router();

const Jobseekers = require('./jobseeker-model.js');

/**
*@api {post} /api/jobseekers
*@apiName PostJobseekers
*@apiGroup Jobseekers
**/

router.post('/', (req, res) => {
    Jobseekers.create(req.body).then(seeker => {
        res.status(201).json(seeker)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

/**
*@api {get} /api/jobseekers
*@apiName GetJobseekers
*@apiGroup Jobseekers
**/

router.get('/', (req, res) => {
    Jobseekers.get().then(seekers => {
            res.status(200).json(seekers)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

/**
*@api {put} /api/jobseekers/:jobseeker_id
*@apiName PutJobseekers
*@apiGroup Jobseekers
*@apiParam {Number} id jobseeker's unique ID.
**/

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Jobseekers.update(id, changes).then(newRecord => {
        res.status(200).json(newRecord)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

/**
*@api {delete} /api/jobseekers/:jobseeker_id
*@apiName DeleteJobseekers
*@apiGroup Jobseekers
**/

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Jobseekers.remove(id).then(deleted => {
        res.status(200).json({ deleted: `member of id ${id}`})
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router;