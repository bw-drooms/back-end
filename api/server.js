const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const seekerRouter = require('./jobseeker/jobseeker-router.js');
const companyRouter = require('./company/company-router.js');

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/jobseekers', seekerRouter)
server.use('/api/jobs', companyRouter)

server.get('/', () => {
    console.log('welcome to droom')
})

module.exports = server;