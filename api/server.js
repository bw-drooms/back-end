const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const seekerRouter = require('./jobseeker/jobseeker-router.js');
const jobsRouter = require('./jobs/jobs-router.js');
const companiesRouter = require('./company/company-router.js');


server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api/jobseekers', seekerRouter)
server.use('/api/jobs', jobsRouter)
server.use('/api/companies', companiesRouter)

server.get('/', () => {
    console.log('welcome to droom')
})

module.exports = server;