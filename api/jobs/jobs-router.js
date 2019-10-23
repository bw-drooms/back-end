const express = require('express');
const router = express.Router();

const Jobs = require('./jobs-model.js');
const Companies = require('../company/company-model.js');

/**
*@api {get} /jobs
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

router.get('/:company_id', (req, res) => {
    const id = req.params.company_id;
    console.log(id)
    Companies.getJobsById(id).then(company => {
        res.status(200).json(company)
    })
})

/**
*@api {post} /jobs
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
*@api {put} /jobs/:job_id
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
/**
*@api {delete} /jobs/:job_id
*@apiName DeleteJobs
*@apiGroup Jobs
**/
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Jobs.remove(id).then(deleted => {
        res.status(200).json({ deleted: `job of id ${id}`})
    })
})

module.exports = router;