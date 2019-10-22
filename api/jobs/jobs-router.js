const express = require('express');
const router = express.Router();

const Jobs = require('./jobs-model.js');

/**
*@api {get} /api/jobs
*@apiName GetJobs
*@apiGroup Jobs
**/

router.get('/', (req, res) => {
    Jobs.getJobs()
        .then(jobs => {
            res.status(200).json(jobs)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

/**
*@api {post} /api/jobs
*@apiName PostJobs
*@apiGroup Jobs
**/

router.post('/', (req, res) => {
    Jobs.create(req.body)
        .then(job => {
            res.status(201).json(job)
    })
})

/**
*@api {put} /api/jobs/:job_id
*@apiName PutJobs
*@apiGroup Jobs
*@apiParam {Number} id job's unique ID.
**/

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Jobs.update(id, changes).then(newRecord => {
        res.status(200).json(newRecord)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Jobs.remove(id).then(deleted => {
        res.status(200).json({ deleted: `job of id ${id}`})
    })
})

module.exports = router;