const express = require('express');
const router = express.Router();
const withCatch = require('../../utils/withCatch.js');
const isEmptyObj = require('../../utils/isEmptyObj.js');

const Companies = require('./company-model');

/**
*@api {post} /companies
*@apiName PostCompanies
*@apiGroup Companies
**/

router.post('/', async (req, res) => {

    const [err, company] = await withCatch(Companies.create(req.body))

    if (err) res.status(400).json(err)
    else res.status(201).json({ created: `the following company with id of ${company}`, company_info: req.body})

})

/**
*@api {get} /companies
*@apiName GetCompanies
*@apiGroup Companies
**/

router.get('/', async (req, res) => {

    const [err, companies] = await withCatch(Companies.get())

        if (err) res.status(500).json(err)
        res.status(200).json(companies)
    
})

/**
*@api {get} /companies/:company_id
*@apiName GetCompaniesJobs
*@apiGroup Companies
* @apiParam {Number} id company's unique ID.
**/

router.get('/:company_id', async (req, res) => {

    const [err, company] = await withCatch(Companies.getById(req.params.company_id))
        
        if (err) res.status(500).json(err)
        else if (err || isEmptyObj(company)) res.status(404).json({ error: "There is no company by this id"})
        else res.status(200).json(company)

})
/**
*@api {get} /companies/:company_id/jobs/:job_id
*@apiName GetCompaniesJobsApplicants
*@apiGroup Companies
* @apiParam {Number} id job's unique ID.
**/
router.get('/:company_id/jobs/:job_id', async (req, res) => {
    
    const [err, job] = await withCatch(Companies.getJobseekersByJobID(req.params.job_id)) 

    if (err) res.status(500).json(err)
    else if (err || isEmptyObj(job)) res.status(404).json({ error: "There is no job by this id"})
    else res.status(200).json(job)
})

/**
*@api {put} /companies/:company_id
*@apiName PutCompanies
*@apiGroup Companies
*@apiParam {Number} id company's unique ID.
**/

router.put('/:id', async (req, res) => {

    const [err, company] = await withCatch(Companies.update(req.params.id, req.body))

    if (err) res.status(500).json(err)
    else res.status(200).json({success: `The company with id ${req.params.id} was updated with the following changes`, company})

})

/**
*@api {delete} /companies/:company_id
*@apiName DeleteCompanies
*@apiGroup Companies
**/

router.delete('/:id', async (req, res) => {

    const [err, count] = await withCatch(Companies.remove(req.params.id))
    console.log(count)
        if (err) res.status(500).json(err)
        else res.status(200).json({ deleted: `${count } company of id ${req.params.id}`})

})



module.exports = router;