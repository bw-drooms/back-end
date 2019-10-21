const express = require('express');
const router = express.Router();

const Companies = require('./company-model');

router.get('/', (req, res) => {
    Companies.get().then(companies => {
        res.status(200).json(companies)
    })
})

router.get('/:company_id', (req, res) => {
    const id = req.params.company_id;
    console.log(id)
    Companies.getJobsById(id).then(company => {
        res.status(200).json(company)
    })
})


module.exports = router;