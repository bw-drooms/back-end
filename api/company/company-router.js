const express = require('express');
const router = express.Router();

const Companies = require('./company-model');

router.get('/', (req, res) => {
    Companies.getJobs()
        .then(companies => {
            res.status(200).json(companies)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router;