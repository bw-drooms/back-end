const express = require('express');
const router = express.Router();
const withCatch = require('../../utils/withCatch.js');
const isEmptyObj = require('../../utils/isEmptyObj.js');
const Jobseekers = require('./jobseeker-model.js');
const checkRole = require('../../middleware/check-department.js');


/**
*@api {post} /jobseekers
*@apiName PostJobseekers
*@apiGroup Jobseekers
**/

router.post('/', async (req, res) => {
    
   const [err, jobseekers] = await withCatch (Jobseekers.create(req.body))

   if (err) res.status(500).json(err)
   else res.status(201).json({ created: `following jobseeker with id of ${jobseekers.id}`, jobseeker: req.body})
})

/**
*@api {get} /jobseekers
*@apiName GetJobseekers
*@apiGroup Jobseekers
**/

router.get('/', checkRole("company"), async (req, res) => {

    const [err, jobseekers] = await withCatch (Jobseekers.get())

    if (err) res.status(500).json(err)
    else if (err || isEmptyObj(jobseekers)) res.status(404).json({ error: "There are no jobseekers available yet."})
    else res.status(200).json(jobseekers)
})

router.get('/:jobseeker_id', async (req, res) => {

    const [err, jobseeker] = await withCatch(Jobseekers.getById(req.params.jobseeker_id))
        
        if (err) res.status(500).json(err)
        else if (err || isEmptyObj(jobseeker)) res.status(404).json({ error: "There is no jobseeker by this id"})
        else res.status(200).json(jobseeker)

})

/**
*@api {put} /jobseekers/:jobseeker_id
*@apiName PutJobseekers
*@apiGroup Jobseekers
*@apiParam {Number} id jobseeker's unique ID.
**/

router.put('/:id', async (req, res) => {

    const changes = req.body;

    const [err, jobseeker] = await withCatch (Jobseekers.update(req.params.id, changes))

    if (err) res.status(500).json({message: "there was a problem with the request", err})
    else if (err || isEmptyObj(jobseeker)) res.status(404).json({ error: "There is no jobseeker available yet."})
    else res.status(200).json(jobseeker)

})

/**
*@api {delete} /jobseekers/:jobseeker_id
*@apiName DeleteJobseekers
*@apiGroup Jobseekers
**/

router.delete('/:id', async (req, res) => {

    const [err, count] = await withCatch (Jobseekers.remove(req.params.id))
    
    if (err) res.status(500).json(err)
    else res.status(200).json({ deleted: `${count} jobseeker with the id of ${req.params.id}`})
})

module.exports = router;