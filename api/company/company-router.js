const express = require('express');
const router = express.Router();

const Companies = require('./company-model');

/**
*@api {post} /companies
*@apiName PostCompanies
*@apiGroup Companies
**/

router.post('/', (req, res) => {
    Companies.create(req.body)
        .then(company => {
            res.status(201).json(company)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

/**
*@api {get} /companies
*@apiName GetCompanies
*@apiGroup Companies
**/

router.get('/', (req, res) => {
    Companies.get().then(companies => {
        res.status(200).json(companies)
    })
})

/**
*@api {get} /companies/:company_id
*@apiName GetCompaniesJobs
*@apiGroup Companies
* @apiParam {Number} id company's unique ID.
**/

router.get('/:company_id', (req, res) => {
    const id = req.params.company_id;
    Companies.getById(id).then(company => {
        res.status(200).json(company)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get('/:company_id/jobs/:job_id', (req, res) => {
    const id = req.params.job_id;
    Companies.getJobseekersByJobID(id).then(job => {
        res.status(200).json(job)
    })
})

/**
*@api {put} /companies/:company_id
*@apiName PutCompanies
*@apiGroup Companies
*@apiParam {Number} id company's unique ID.
**/

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Companies.update(id, changes).then(newRecord => {
        res.status(200).json(newRecord)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

/**
*@api {delete} /companies/:company_id
*@apiName DeleteCompanies
*@apiGroup Companies
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