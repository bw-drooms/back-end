const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/user-router.js');
const seekerRouter = require('./jobseeker/jobseeker-router.js');
const jobsRouter = require('./jobs/jobs-router.js');
const companiesRouter = require('./company/company-router.js');
const restricted = require('../auth/restricted-middleware.js');


server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api', usersRouter)
server.use('/api/jobseekers', restricted, seekerRouter)
server.use('/api/jobs', jobsRouter)
server.use('/api/companies', restricted, companiesRouter)

server.get('/', () => {
    console.log('welcome to droom')
})

module.exports = server;